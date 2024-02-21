//Home

import { useEffect, useState } from 'react'
import { appTitle, apiKey } from '../globals/globalVariables';
import Poster from '../components/Poster';

const SearchPage = ( { query } ) => {

    const [sliderHeroMovies, setSliderHeroMovies] = useState(null);
    const [movies, setMovie] = useState([]);
    
    useEffect(() => {
        document.title = `${appTitle} - Search`;
    }, []);

    useEffect(() => {

        const getSearch = async () => {
            console.log(query+apiKey);
            const response = await fetch(query+apiKey, {
            });

            const data = await response.json();
            
            setMovie(data.results);
            
        }

        getSearch();

    }, [query]);

    return (
    <>
        <main>
            <h1>Serach Results</h1>
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
        </main>

    </>
    );
}

SearchPage.defaultProps = {
    query: "search"
}


export default SearchPage;