import { createSlice } from '@reduxjs/toolkit'

export const singleMovieSlice = createSlice({
  name: 'singlemovie',
  initialState: {
    id: " "
  },
  reducers: {
    updateMovieID: (state, action) => {
      state.id = action.payload
    }
  }
})

export const { updateMovieID } = singleMovieSlice.actions

export default singleMovieSlice.reducer