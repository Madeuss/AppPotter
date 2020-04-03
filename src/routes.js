import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Characters from './components/Characters';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={NavBar} />
            </Switch>
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
            <Switch>
                <Route path="/characters" exact component={Characters} />
            </Switch>
        </BrowserRouter>
    );
}