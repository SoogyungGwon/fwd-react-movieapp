import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import { searchBaseURL, apiKey } from '../globals/globalVariables';

const Header = ( { url_set, setUrl } ) => {

    const [search, setSearch] = useState("");
    
    const searchMovie = (evt) => {
        if(evt.key=="Enter"){
            let url=`${searchBaseURL}`+`${apiKey}`+'&query=' +`${search}`;
            console.log( {url} );
            setUrl(url);
            setSearch("");
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
                <li>
                    {/* <form> */}
                        <input type="text" placeholder="Search" 
                        value={search} 
                        onChange={searchEntered} 
                        onKeyDown={searchMovie} />
                        <button name="search-button" onClick={searchMovie}>S</button>
                    {/* </form> */}
                </li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;