import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CheckUsersSavedTracks,
  deleteFavouriteTrack,
  getCurrentUserTracks,
  putFavouriteTrack,
} from "Services/Services";
const token = localStorage.getItem("token");

export const getTracksThunk = createAsyncThunk("get/tracks", async () => {
  const response = await getCurrentUserTracks({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
});

export const addTracksThunk = createAsyncThunk("add/tracks", async (id) => {
  const response = await putFavouriteTrack("", {
    params: {
      ids: id,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
});
export const deleteTracksThunk = createAsyncThunk(
  "delete/tracks",
  async (id) => {
    const response = await deleteFavouriteTrack({
      params: {
        ids: id,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  }
);

const initialState = "";

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTracksThunk.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      .addCase(addTracksThunk.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      .addCase(deleteTracksThunk.fulfilled, (state, action) => {
        return (state = action.payload);
      });
  },
});

export const { updateDetails } = favouriteSlice.actions;

export default favouriteSlice.reducer;
