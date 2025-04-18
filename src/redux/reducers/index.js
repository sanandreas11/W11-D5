import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchSongs = createAsyncThunk("songs/fetchSongs", async (_) => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=the%20weeknd"
  )
  if (!response.ok) throw new Error("Fetch failed")
  const { data } = await response.json()
  return data.slice(0, 6)
})

const songsSlice = createSlice({
  name: "songs",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false
        state.list = action.payload
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default songsSlice.reducer
