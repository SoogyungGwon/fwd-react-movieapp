import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../feature/searchSlice';

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
                <li><NavLink to="/">Moviesite</NavLink></li>
                <li><NavLink to="/favourite">List</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                {/* temporary link below */}
                <li><NavLink to="/movie">Temporary Movie</NavLink></li>
                {/* <li><NavLink to="/search">Search</NavLink></li> */}
                <li>
                            <input type="text" placeholder="Search" 
                            value={search} 
                            onChange={searchEntered} 
                            onKeyDown={searchMovie} />
                            <button id="search-button" onClick={searchMovie}>S</button>
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;