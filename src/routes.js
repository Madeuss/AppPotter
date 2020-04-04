import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import Characters from './components/Characters';
import SortingHat from './components/SortingHat';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={LandingPage} />
            </Switch>
            <Switch>
                <Route path="/characters" exact component={Characters} />
            </Switch>
            <Switch>
                <Route path="/sortingHat" exact component={SortingHat} />
            </Switch>
        </BrowserRouter>
    );
}