import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <Nav />
        </header>
    );
}

export default Header;