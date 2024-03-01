import { imageBaseURL } from '../globals/globalVariables';
import { updateMovieID } from '../feature/singleMovieSlice';
import { addToList, removeFromList } from '../feature/favSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { imageFolderPath } from '../globals/globalVariables'
//image import
import heartImg from '../assets/heart.png';
import noPosterImg from '../assets/no-movie-poster.jpg';


const Poster = ( movies ) => {

    const fav = useSelector((state) => state.fav.items);
    const Found = fav.find(item => item.id === movies.info.id);
    let bgimg = imageBaseURL + movies.info.poster_path;

    if (bgimg === "https://image.tmdb.org/t/p/w500/null") {
        bgimg = noPosterImg;
    }
    
    const posterStyle = {
        
        backgroundImage: `url(${bgimg})`,
        backgroundSize: `cover`,
        backgroudPosition: `center`,
        backgroundRepeat: `no-repeat`,
        width: `100%`,
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleRemoveList = (e) => {
        dispatch(removeFromList(movies.info));
    }

    const handleAddList = (e) => {
        dispatch(addToList(movies.info));
    }

    const seeMore = (e) => {
        dispatch(updateMovieID(e.target.id));
        navigate('/movie/mid='+e.target.id);
    }

    return (
        <>
            <div className="movie" style={posterStyle}>
                <div className='movie-details-on-poster'>
                    {Found &&
                    <div className="heart">
                        <img src={heartImg} />
                    </div>}
                    <div className='movie-text-box-on-poster'>
                        <h4 className="title">{movies.info.title}</h4>
                        <p className="rating">Rating: {movies.info.vote_average}</p>
                    </div>
                    <div className="overview-on-poster">
                        <h4>Overview</h4>
                        <p>{movies.info.overview}</p>
                    </div>
                    <div className="poster-button">
                    { Found ? 
                        <button id={movies.info.id} onClick={handleRemoveList}>Remove</button> :
                        <button id={movies.info.id} onClick={handleAddList}>Add</button>
                    }
                        <button id={movies.info.id} onClick={seeMore}>More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Poster;