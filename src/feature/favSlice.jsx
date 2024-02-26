import { createSlice } from '@reduxjs/toolkit'

export const favSlice = createSlice({
  name: 'fav',
  initialState: {
    value: " "
  },
  reducers: {
    addToList: (state, action) => {
      state.value = action.payload
    },
    removeFromList: (state, action) => {
        state.value = action.payload
    }
  }
})

export const { addToList, removeFromList } = favSlice.actions

export default favSlice.reducer