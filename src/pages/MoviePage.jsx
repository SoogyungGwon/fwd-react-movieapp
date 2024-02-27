//Single movie page

//import
import react from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToList, removeFromList } from '../feature/favSlice';

//Variables
import { appTitle, apiKey, singleMoveQuery, imageBaseURL, imageFolderPath } from '../globals/globalVariables';

const MoviePage = () => {

    const fav = useSelector((state) => state.fav.items);

    let { mid } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const id = mid.match(/\d+/);
    const [movies, setMovie] = useState([]);
  
    const query = singleMoveQuery + id + "?language=en-US" + apiKey;

    useEffect(() => {
        document.title = `${appTitle}`;
    }, []);

    useEffect(() => {

        const getSingleMovieData = async () => {
            const response = await fetch(query, {
            });

            const data = await response.json();
            setMovie(data);
        }

        getSingleMovieData();

    }, [query]);

    const handleRemoveList = (e) => {
        dispatch(removeFromList(movies));
    }

    const handleAddList = (e) => {
        dispatch(addToList(movies));
    }

    const Found = fav.find(item => item.id === movies.id);

    return (
        <main>
            <div className="more-movie">
            {id !== null ? (
                <>
                <h1 className="more-title">{movies.title}</h1>
                {(movies.backdrop_path) ?
                    <img src={imageBaseURL + movies.backdrop_path} className='backdrop-image' /> :
                    <img src={imageFolderPath + "no-movie-poster.jpg"} className='backdrop-image' />
                }
                <div className="add-button-morepage">
                    { Found ? 
                        <button id={movies.id} onClick={handleRemoveList}>Remove</button> :
                        <button id={movies.id} onClick={handleAddList}>Add</button>
                    }
                    </div>
                <div className='more-info-movie-details'>
                    <div className='more-info-movie-text-box'>
                        <p className="more-rating">Rating: {movies.vote_average}</p>
                    </div>
                    <div className="more-info-overview">
                        <h2>Overview</h2>
                        <p>{movies.overview}</p>
                    </div>
                </div>
                </>
            ) : <p>Movie contents not found!</p>}
            </div>
        </main>
    );
}

export default MoviePage;