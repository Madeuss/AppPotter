import React from 'react'

import './styles.css'

import NavBar from '../../components/Navbar'

import LandingContainer from '../../components/LandingContainer'
import Section from '../../components/Sections';

export default function LandingPage() {
    return (
        <>
            <NavBar />
            <LandingContainer />
            <Section />
        </>
    )
}
