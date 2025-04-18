import { configureStore } from "@reduxjs/toolkit"
import songsReducer from "../reducers"

export const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
})
