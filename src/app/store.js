import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import playlistReducer from "pages/PlayListPage/playlistSlice";
import favouriteReducer from "pages/FavouritePage/favouriteSlice";
import playerReducer from "Layouts/components/PlayingBar/playerSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    playlist: playlistReducer,
    favourite: favouriteReducer,
    player: playerReducer,
  },
});
