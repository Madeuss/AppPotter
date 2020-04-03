import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

export default function LandingPage() {
  return (
    <container className="landing-body">
        <section class="landing-data">
            <div className="landing-title">
                <h1>Título</h1>
            </div>
            <div className="landing-content">
                <h2>Fodase</h2>
                <h3>fodasefoda-sefodac</h3>
                    <ButtonGroup aria-label="Basic example">
                       <Link to="/characters"><Button variant="secondary">Left</Button></Link>
                        <Button variant="secondary">Middle</Button>
                        <Button variant="secondary">Right</Button>
                    </ButtonGroup>
            </div>
        </section>
    </container>
  );
}
