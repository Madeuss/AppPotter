import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link, animateScroll } from "react-scroll";

import './styles.css';

export default function LandingContainer() {
  return (
      <>
            <container className="landing-body">
                <section class="landing-data">
                    <div className="landing-title">
                        <h1>Título</h1>
                    </div>
                    <div className="landing-content">
                        <h2>Fodase</h2>
                        <h3>fodasefoda-sefodac</h3>
                            <ButtonGroup aria-label="Basic example">
                                <Link
                                    activeClass="active"
                                    to="section1"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration= {900}
                                ><Button variant="secondary">Left</Button></Link>
                                <Button variant="secondary">Middle</Button>
                                <Button variant="secondary">Right</Button>
                            </ButtonGroup>
                    </div>
                </section>
            </container>
        </>
  );
}
