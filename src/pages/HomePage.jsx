//Home

import { useEffect, useState } from 'react'
import { appTitle, popularQuery, topRatedQuery, nowPlayingQuery, upcomingQuery } from '../globals/globalVariables';
import { apiKey } from '../globals/key'
import Poster from '../components/Poster';
import HeroImgSlider from '../components/HeroImgSlider';

const HomePage = () => {

    const [movies, setMovie] = useState([]);
    const [query, setQuery] = useState(popularQuery);
    const [title, setTitle] = useState("Popular");
        
    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    useEffect(() => {

        const getJson = async () => {
            const response = await fetch(query, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${apiKey}`
                }
            });

            const data = await response.json();
            setMovie(data.results);
        }

        getJson();

    }, [query]);

    const handleMovieCategory = (e) => {
        switch(e.target.id) {
            case 'popular':
                setQuery(popularQuery);
                setTitle("Popular");
                break;
            case 'top-rated':
                setQuery(topRatedQuery);
                setTitle("Top Rated");
                break;
            case 'now-playing':
                setQuery(nowPlayingQuery);
                setTitle("Now Playing");
                break;
            case 'upcoming':
                setQuery(upcomingQuery);
                setTitle("Upcoming");
                break;
            default:
                setQuery(popularQuery);
        }
        
    }

    return (
    <>
        <main>
            <h1 className="home-heading">Moviesite Home</h1>
            {/* <section className="hero-image-section">
             <HeroImgSlider movies={movies} />
            </section> */}
            <section className='type-button'>
                <button id='popular' onClick={handleMovieCategory}>Popular</button>
                <button id='top-rated' onClick={handleMovieCategory}>Top Rated</button>
                <button id='now-playing' onClick={handleMovieCategory}>Now Playing</button>
                <button id='upcoming' onClick={handleMovieCategory}>Upcoming</button>  
            </section>

            <section>
                <h2 className='movie-category'>{title}</h2>
                <div className='movie-wrapper'>
                    {
                        (movies.length==0) ? <p>Movies not found!</p>:movies.map((res,pos)=>{
                            return(
                                <Poster info={res} key={pos} />
                            )
                        })
                    }
                </div>
            </section>
        </main>
    </>
    );
}

export default HomePage;