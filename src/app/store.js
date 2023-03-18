import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../components/Search/searchSlice";
import playlistReducer from "pages/PlayListPage/playlistSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    playlist: playlistReducer,
  },
});
