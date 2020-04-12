import React from 'react';
import { Link } from "react-scroll";

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
                        <Link activeClass="active" to="section1" spy={true} smooth={true} offset={0} duration= {900}>
                               <button className="btn-scroll" type="button">Descendio</button>
                        </Link>
                        <Link activeClass="active" to="section2" spy={true} smooth={true} offset={0} duration= {900}>
                               <button className="btn-scroll" type="button">Houses</button>
                        </Link>
                        <Link activeClass="active" to="section3" spy={true} smooth={true} offset={0} duration= {900}>
                               <button className="btn-scroll" type="button">Characters</button>
                        </Link>
                    </div>
                </section>
            </container>
        </>
  );
}
