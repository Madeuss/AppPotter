import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

import NavBar from '../Navbar';

export default function Characters() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
         api.get('characters', { params: 
            { key: '$2a$10$k1f2mJX6dPVGiXPmELks1OYrMjSSUJpyBOJ5ZsD3kdWI3msXTdE.G' } 
        }).then(response => {
            setCharacters(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <>
            <NavBar />
            <section className="section-characters">
                <ul>
                    {characters.map(character => (
                        <li key={character.id}>
                            <strong>Name:</strong>
                            <p>{character.name}</p>

                            <strong>House:</strong>
                            <p>{character.house}</p>

                            <strong>Role:</strong>
                            <p>{character.role}</p>

                            <strong>Blood:</strong>
                            <p>{character.bloodStatus}</p>

                        </li>

                    ))}
                </ul>
            </section>
        </>
    )
}
