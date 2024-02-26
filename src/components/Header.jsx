import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../feature/searchSlice';
import { imageFolderPath } from '../globals/globalVariables'
//Awsome fonts Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useSelector(state => state.searchKey);    
            
    const searchMovie = (evt) => {
        if(evt.key=="Enter" || evt.type == "click"){
            dispatch(setSearchKey(search));
            navigate('/search');
        }
    }

    const searchEntered = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        
    }

    return (
        <header>
        <nav>
            <ul className="main-nav">
                <li><NavLink to="/"><img className="home-logo" src={`${imageFolderPath}logo.png`} /></NavLink></li>
                <li><NavLink to="/favourite">List</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li>
                            <input type="text" placeholder="Search" 
                            id="search-input"
                            value={search} 
                            onChange={searchEntered} 
                            onKeyDown={searchMovie} />
                            <button id="search-button" onClick={searchMovie}><FontAwesomeIcon icon={faSearch} /></button>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;