import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    language: "ru",

    selected_category: "mini",

    bikeState: {
      name: "",

    }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
        state.language = action.payload
    },
    setCategory: (state, action) => {
      state.selected_category = action.payload
      console.log("asd")
  },
  },
})

export const { setLanguage, setCategory } = appSlice.actions

export default appSlice.reducer


