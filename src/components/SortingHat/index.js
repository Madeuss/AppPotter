import { React, useState, useEffect } from 'react'

import api from '../../services/api';

import './styles.css'
import NavBar from '../../components/Navbar'

export default function SortingHat() {
    const [house, setHouse] = useState();

    useEffect(() => {
        const response = api.get('sortingHat')

        setHouse(response.data);
        console.log(response.data);
   }, []);

    return (
        <>
            <NavBar />
            <section className="section-characters">
                {house.map(house => (
                    <li key={house}>
                        <strong>Name:</strong>
                        <p>{house.data}</p>
                    </li>
                ))}
            </section>
        </>
    )
}
