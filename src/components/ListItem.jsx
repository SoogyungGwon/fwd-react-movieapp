// Each movie item added to the List

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToList, removeFromList } from '../feature/favSlice';

function ListItem({listObj, isFav}) {

    const dispatch = useDispatch();

    return (
        <div className="list-item">
            {isFav &&
                <div className="heart">
                    <p>Heart</p>
                </div>}
            <div className="profile-picture">
                <p>{listObj.title}</p>
            </div>
        </div>
    );

}

ListItem.defaultProps = {
    //
}

export default ListItem;
