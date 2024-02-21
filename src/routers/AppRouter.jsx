import { useState } from 'react'
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

    const [query, setQuery] = useState("");
    const [clickedMovieID, setClickedMovieID] = useState("");
    const { id } = useParams();

    const handleMovideID =(data) => {
        setClickedMovieID(data);
    }

    return (
        <BrowserRouter>
            <Header onQuery={setQuery}/>
            <Routes>
                <Route path="/" exact element={ <HomePage query={query} /> } />
                <Route path="/about" element={ <AboutPage /> } />
                <Route path="/movie">
                    <Route path={id} element={ <MoviePage id={id}/> } /> 
                </Route>
                <Route path="/search" element={ <SearchPage query={query} />} />
                <Route path="/favourite" element={ <FavouritePage /> } />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
       </BrowserRouter>
    )
}

export default AppRouter;