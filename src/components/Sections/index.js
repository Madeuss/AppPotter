import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';
import chapeu from '../../assets/chapeu.png';

import api from '../../services/api';

export default function Section() {
    const API_KEY = '$2a$10$k1f2mJX6dPVGiXPmELks1OYrMjSSUJpyBOJ5ZsD3kdWI3msXTdE.G'
    const [houses, setHouses] = useState([])

    useEffect(() => {
        (async function listHouses() {
            const response = await api.get('houses', {
                params: {
                    key: `${API_KEY}`
                }
            });
            
            console.log(response.data);
            setHouses(response.data)
        })()
    }, [])

    return (
        <>
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
            <section className="body-section" id="section2">
                <aside className="aside" id="info-aside">
                    <div className="data-section2">
                        <h1>Casas</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Laudantium, delectus.!</p>
                        <Link to="/sortingHat"><Button className="btn-section1" variant="outline-dark">Dark</Button></Link>
                    </div>
                </aside>
                <aside className="aside" id="image-aside2">
                    <div className="image-sec" id="image">
                        {houses.map(house => (
                            <div key={house.id}>
                                <h2>{house.name}</h2>
                            </div>
                        ))}
                    </div>
                </aside>
            </section>
        </>
    )
}
