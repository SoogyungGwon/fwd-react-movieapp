//Home

import { useEffect, useState } from 'react'
import { appTitle, popularQuery, apiKey, imageBaseURL } from '../globals/globalVariables';
import Poster from '../components/Poster';

const HomePage = () => {

    const [movies, setMovie] = useState([]);
        
    useEffect(() => {
        document.title = `${appTitle} - Home`;
    }, []);

    useEffect(() => {

        const getJsonPopular = async () => {
            const response = await fetch(popularQuery + apiKey, {
            });

            const data = await response.json();
            setMovie(data.results);
            
        }

        getJsonPopular();

    }, []);

    return (
    <>
        <main>
            <h1 className="home-heading">Moviesite Home</h1>
            <section>
                <h2>Hero Image</h2>
                 <img className='hero-image' src=""></img>
                <div className='hero-desc'>
                    <h3>Hero image movie name</h3>
                    <p>Hero image Movie info</p>
                    <p>Hero image movie description</p>
                </div>
            </section>

            <section>
                <h2>Popular movies</h2>
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
            <section>
                <h2>Other movies with filter</h2>
                <div className="poster">Posters</div>
            </section>
        </main>
    </>
    );
}

export default HomePage;