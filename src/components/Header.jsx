import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { searchBaseURL } from '../globals/globalVariables';

const Header = ( { onQuery } ) => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();
            
    const searchMovie = (evt) => {
        if(evt.key=="Enter" || evt.type == "click"){
            let url=`${searchBaseURL}` + `${search}`;
            console.log(url);
            onQuery(url)
            setSearch("");
            navigate('/search');
        }
    }

    const searchEntered = (e) => {
        e.preventDefault();
        console.log('search changed');
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