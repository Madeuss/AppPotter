import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';
import chapeu from '../../assets/chapeu.png';
export default function Section() {
    return (
        <section className="body-section" id="section1">
            <aside className="aside" id="image-aside">
                <img src={chapeu} alt="Chapéu seletor"/>
                <div class="image-sec" id="image-hat">
                    
                </div>
            </aside>
            <aside className="aside" id="info-aside">
                <div className="data-section1">
                    <h1>CHAPÉU SELETOR HH</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p>Laudantium, delectus.!</p>
                    <Link to="/sortingHat"><Button className="btn-section1" variant="outline-dark">Dark</Button></Link>
                </div>
            </aside>
        </section>
    )
}
