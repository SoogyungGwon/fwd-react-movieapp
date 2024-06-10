//Home

import { useEffect, useState } from 'react'
import { searchBaseURL, appTitle } from '../globals/globalVariables';
import { apiKey } from '../globals/key'
import { useSelector } from 'react-redux';
import Poster from '../components/Poster';


const SearchPage = () => {

    const [movies, setMovie] = useState([]);

    const searchKey = useSelector(state => state.search.value);
    const query = searchBaseURL + searchKey;
     
    useEffect(() => {
        document.title = `${appTitle} - Search`;
    }, []);

    useEffect(() => {

        const getSearch = async () => {
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

        getSearch();

    }, [query]);

    return (
        <main>
            <h1>Serach Results</h1>
            <section>
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
    );
}

SearchPage.defaultProps = {
    query: "search"
}


export default SearchPage;