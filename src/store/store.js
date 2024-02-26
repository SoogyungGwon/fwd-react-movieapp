import { configureStore } from '@reduxjs/toolkit'
import favReducer from '../feature/favSlice'
import searchReducer from '../feature/searchSlice'
import singleMovieReducer from '../feature/singleMovieSlice'

export default configureStore({
  reducer: {
    search: searchReducer,
    fav: favReducer,
    singlemovie: singleMovieReducer
  }
})