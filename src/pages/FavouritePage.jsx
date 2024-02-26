//Single movie page

import { useEffect } from 'react'
import { appTitle } from '../globals/globalVariables'
import { useSelector } from 'react-redux'
import ListItem from '../components/ListItem'

const FavouritePage = () => {

    const fav = useSelector((state) => state.fav.items);
    console.log("fav:" + fav);

    useEffect(() => {
        document.title = `${appTitle} - List`;
    }, []);

    
    return (
        <>
            <h2>Fav</h2>
            {
             fav.length < 1 ? <p>No items added to the List</p> : 
             <div className="fav-grid">
                 {fav.map((favItem, i) => {
                     return <ListItem key={i} 
                                  listObj={favItem}
                                  isFav={true} />
                 })}
             </div>
             }
        </>
    );
}

export default FavouritePage;