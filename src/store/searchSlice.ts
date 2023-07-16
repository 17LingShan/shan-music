import { createSlice } from "@reduxjs/toolkit"

export interface searchState {
  keywords: string
}

const initialState: searchState = {
  keywords: ""
}

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchWords: (state, action) => {
      state.keywords = action.payload
    }
  }
})

export const { setSearchWords } = searchSlice.actions

export default searchSlice.reducer
