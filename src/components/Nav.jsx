import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="main-nav">
                <li><NavLink to="/">Moviesite</NavLink></li>
                <li><NavLink to="/favourite">List</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                {/* temporary link below */}
                <li><NavLink to="/movie">Temporary Movie</NavLink></li>
                <li>
                    <input type="text" placeholder="Search" value="searchInput" readOnly/>
                    {/* onChange={handleSearch} */}
                </li>
            </ul>
        </nav>
    );
}

export default Nav;