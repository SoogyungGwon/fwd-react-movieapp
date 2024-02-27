import { APP_FOLDER_NAME } from '../globals/globalVariables';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

// Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// pages
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import MoviePage from '../pages/MoviePage'
import FavouritePage from '../pages/FavouritePage'
import PageNotFound from '../pages/PageNotFound'
import SearchPage from '../pages/SearchPage'

const AppRouter = () => {

    return (
        <BrowserRouter basename={`/${APP_FOLDER_NAME}`}>
            <Header />
            <Routes>
                <Route path="/" exact element={ <HomePage /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/movie/:mid" element={ <MoviePage /> } /> 
                <Route path="/search" element={ <SearchPage />} />
                <Route path="/favourite" element={ <FavouritePage /> } />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
       </BrowserRouter>
    )
}

export default AppRouter;