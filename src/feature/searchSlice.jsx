import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: " "
  },
  reducers: {
    setSearchKey: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setSearchKey } = searchSlice.actions

export default searchSlice.reducer