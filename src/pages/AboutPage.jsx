//About page

import { useEffect, useState } from 'react'
import { appTitle } from '../globals/globalVariables';
import react from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

const AboutPage = () => {

    useEffect(() => {
        document.title = `${appTitle} - About`;
    }, []);

    return (
        <div>About</div>
        
    );
}

export default AboutPage;