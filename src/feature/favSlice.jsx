import { createSlice } from '@reduxjs/toolkit'
import { appStorageName } from '../globals/globalVariables'

function getFavsFromLocalStorage(){
    const fav = localStorage.getItem(appStorageName);
    if(fav !== null){
        return {
            items: JSON.parse(fav)
        }
    }
    return {
        items: []
    }
}

const favsFromLocalStorage = getFavsFromLocalStorage();

const initialState = {
  items: favsFromLocalStorage.items
}

function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToList: (state, action) => {
      const newFavs = [...state.items, action.payload];
      localStorage.setItem(appStorageName, JSON.stringify(newFavs));
      state.items = newFavs;
    },
    removeFromList: (state, action) => {
      const itemsCopy = state.items;
      itemsCopy.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(appStorageName, JSON.stringify(itemsCopy))
      state.items = itemsCopy;
    }
  },
});

export const { addToList, removeFromList } = favSlice.actions

export default favSlice.reducer