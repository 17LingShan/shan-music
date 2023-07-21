import { createSlice } from "@reduxjs/toolkit"

const initialState: searchState = {
  keywords: "",
  id: 0,
  level: ""
}

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setSearchKeywords: (state, action) => {
      console.log(action)
      state.keywords = action.payload
    },

    setMusicId: (state, action) => {
      console.log(action)
      state.id = action.payload
    }
  }
})

export const { setSearchKeywords, setMusicId } = searchSlice.actions

export default searchSlice.reducer
