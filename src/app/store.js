import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import playlistReducer from "pages/PlayListPage/playlistSlice";
import favouriteReducer from "pages/FavouritePage/favouriteSlice";
import playerReducer from "Layouts/components/PlayingBar/playerSlice";
import userReducer from "Auth/userSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    playlist: playlistReducer,
    favourite: favouriteReducer,
    player: playerReducer,
    user: userReducer,
  },
});
