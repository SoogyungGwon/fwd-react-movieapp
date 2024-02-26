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
        <main>
            <div className="more-movie">
            {id !== null ? (
                <>
                <h1 className="more-title">{movies.title}</h1>
                <img src={imageBaseURL + movies.backdrop_path} className='backdrop-image' />
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