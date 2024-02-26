//Single movie page

import { useEffect } from 'react'
import { appTitle } from '../globals/globalVariables'
import { useSelector } from 'react-redux'
import Poster from '../components/Poster'

const FavouritePage = () => {

    const fav = useSelector((state) => state.fav.items);

    useEffect(() => {
        document.title = `${appTitle} - List`;
    }, []);

    
    return (
        <main>
            <h1>Your List</h1>
            <div className="movie-wrapper">
            {
                fav.length < 1 ? <p>No items added to the List</p> : fav.map((res,pos)=>{
                    return(
                        <Poster info={res} key={pos} />
                    )
                })
            }
             </div>
        </main>
    );
}

export default FavouritePage;