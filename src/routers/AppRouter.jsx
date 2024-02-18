import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import MoviePage from '../pages/MoviePage'
import FavouritePage from '../pages/FavouritePage'
import PageNotFound from '../pages/PageNotFound'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" exact element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/movie" element={ <MoviePage /> } />
                <Route path="/favourite" element={ <FavouritePage /> } />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
       </BrowserRouter>
    )
}

export default AppRouter;