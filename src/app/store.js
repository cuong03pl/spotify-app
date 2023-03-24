import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import playlistReducer from "pages/PlayListPage/playlistSlice";
import favouriteReducer from "pages/FavouritePage/favouriteSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    playlist: playlistReducer,
    favourite: favouriteReducer,
  },
});
