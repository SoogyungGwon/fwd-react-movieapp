//Single movie page

import { useEffect, useState } from 'react'
import { appTitle } from '../globals/globalVariables';
import react from 'react';

const FavouritePage = () => {

    useEffect(() => {
        document.title = `${appTitle} - List`;
    }, []);

    return (
        <>
            <h2>Fav</h2>
        </>
    );
}

export default FavouritePage;