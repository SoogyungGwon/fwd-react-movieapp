import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setSearchKey } from '../feature/searchSlice';
import { imageFolderPath } from '../globals/globalVariables'
//Awsome fonts Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [search, setSearch] = useState("");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setMobile] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useSelector(state => state.searchKey);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if(windowWidth < 670) {
            setMobile(true);
        }else{
            setMobile(false);
        }
    };
   
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
      }, [windowWidth]);
            
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

    const handleMobileMenu = (e) => {
        if(isMobileMenuOpen == false) {
            setMobileMenuOpen(true);
        } else if(isMobileMenuOpen == true) {
            setMobileMenuOpen(false);
        }
    }

    return (
        <header>
        <nav>
            <ul className="main-nav">
                <li><NavLink to="/"><img className="home-logo" src={`${imageFolderPath}logo.png`} /></NavLink></li>
                {(!isMobile) ? (
                    <>
                    <li><NavLink to="/favourite">List</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li className='navSearchLi'>
                    <input type="text" placeholder="Search" 
                        id="search-input"
                        value={search} 
                        onChange={searchEntered} 
                        onKeyDown={searchMovie} />
                        <button id="search-button" onClick={searchMovie}><FontAwesomeIcon icon={faSearch} /></button>
                    </li>
                    </>
                ) : (
                    <>
                    <li className='navSearchLi'>
                    <input type="text" placeholder="Search" 
                        id="search-input"
                        value={search} 
                        onChange={searchEntered} 
                        onKeyDown={searchMovie} />
                        <button id="search-button" onClick={searchMovie}><FontAwesomeIcon icon={faSearch} /></button>
                    </li>
                    <li><button id="hbg-button" onClick={handleMobileMenu}><FontAwesomeIcon icon={faBars} /></button></li>
                    </>
                    )
                }
            </ul>
            {(isMobileMenuOpen) ?
                (
                <>
                <ul className="mobile-main-nav">
                    <li><NavLink to="/favourite">List</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
                </>
                ):""
            }
        </nav>
        </header>
    );
}

export default Header;