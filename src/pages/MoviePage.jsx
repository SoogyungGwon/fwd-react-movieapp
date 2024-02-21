//Single movie page

//import
import react from 'react';
import { useEffect, useState } from 'react'


//Variables
import { appTitle, apiKey, singleMoveQuery } from '../globals/globalVariables';

const MoviePage = () => {

    useEffect(() => {
        document.title = `${appTitle}`;
    }, []);

    useEffect(() => {

        const getSingleMovieData = async () => {
            const response = await fetch(singleMoveQuery + id + '?language=en-US' + apiKey, {
            });

            const data = await response.json();
            setMovie(data);
        }

        getSingleMovieData();

    }, []);

    const contentByID = (id) => {
        const content = {

        };

        return content[id] || 'Content is not found';
    }

    return (
        <div>Movie page</div>
    );
}

export default MoviePage;