import react, { useState } from 'react';
import { imageBaseURL } from '../globals/globalVariables';

const Poster = ( movies ) => {

    const [movieID, setMovieID] = useState(" ");

    const addToList = () => {

    }

    const seeMore = (e) => {
        setMovieID(e.target.value);
        console.log({movieID});
        
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
                        <button value={movies.info.id} onClick={addToList}>Add</button>
                        <button value={movies.info.id} onClick={seeMore}>More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;