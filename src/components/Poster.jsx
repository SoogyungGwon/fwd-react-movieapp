import react, { useState } from 'react';
import { imageBaseURL } from '../globals/globalVariables';
import { updateMovieID } from '../feature/singleMovieSlice';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Poster = ( movies ) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToList = (e) => {


    }

    const seeMore = (e) => {
        console.log(e.target.id);
        dispatch(updateMovieID(e.target.id));
        navigate('/movie/mid='+e.target.id);
    }

        return (
        <>
            <div className="movie">
                <img src={imageBaseURL+movies.info.poster_path} className='poster-image' />
                <div className='movie-details-on-poster'>
                    <div className='movie-text-box-on-poster'>
                        <h4 className="title">{movies.info.title}</h4>
                        <p className="rating">Rating: {movies.info.vote_average}</p>
                    </div>
                    <div className="overview-on-poster">
                        <h4>Overview</h4>
                        <p>{movies.info.overview}</p>
                    </div>
                    <div className="poster-button">
                        <button id={movies.info.id} onClick={addToList}>Add</button>
                        <button id={movies.info.id} onClick={seeMore}>More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;