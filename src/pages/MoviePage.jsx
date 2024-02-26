//Single movie page

//import
import react from 'react';
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToList, removeFromList } from '../feature/favSlice';

//Variables
import { appTitle, apiKey, singleMoveQuery, imageBaseURL } from '../globals/globalVariables';

const MoviePage = () => {

    const fav = useSelector((state) => state.fav.items);


    let { mid } = useParams();
    console.log( "Param: :" + mid );
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
        console.log("Remove id: " + e.target.id);
        dispatch(removeFromList(movies));
        
        console.log(movies.info);
    }

    const handleAddList = (e) => {
        console.log("id: " + e.target.id);
        dispatch(addToList(movies));
        console.log(movies.info);
    }

    const Found = fav.find(item => item.id === movies.id);

    return (
        <>
            <div className="movie">
            {id !== null ? (
                <>
                <img src={imageBaseURL + movies.poster_path} className='poster-image' />
                <div className='movie-details-on-poster'>
                    <div className='movie-text-box-on-poster'>
                    <h4 className="title">{movies.title}</h4>
                    <p className="rating">Rating: {movies.vote_average}</p>
                    </div>
                    <div className="overview-on-poster">
                    <h4>Overview</h4>
                    <p>{movies.overview}</p>
                    </div>
                    <div className="poster-button">
                    { Found ? 
                        <button id={movies.id} onClick={handleRemoveList}>Remove</button> :
                        <button id={movies.id} onClick={handleAddList}>Add</button>
                    }
                    </div>
                </div>
                </>
            ) : <p>Movie contents not found!</p>}
            </div>
        </>
    );
}

export default MoviePage;