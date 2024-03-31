import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo : null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopular: (state, action) => {
      state.Popular = action.payload;
    },
    addTopRated: (state, action) => {
      state.TopRated = action.payload;
    },
    addUpComing: (state, action) => {
      state.UpComing = action.payload;
    },
    addAllTimeFav: (state, action) => {
      state.AllTimeFav = action.payload;
    }, 
    addDiscover: (state, action) => {
      state.Discover = action.payload;
    },
    addTrailerVideo : ( state , action ) => {
      state.trailerVideo = action.payload;
    }

  },
});

export const { addNowPlayingMovies  , addTrailerVideo ,addPopular,addTopRated,addUpComing,addAllTimeFav,addDiscover } = moviesSlice.actions;
export default moviesSlice.reducer;
