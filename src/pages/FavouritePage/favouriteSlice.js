import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  deleteFavouriteTrack,
  getCurrentUserTracks,
  putFavouriteTrack,
} from "Services/Services";

export const getTracksThunk = createAsyncThunk("get/tracks", async (token) => {
  const response = await getCurrentUserTracks({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
});

export const addTracksThunk = createAsyncThunk("add/tracks", async (params) => {
  const response = await putFavouriteTrack("", {
    params: {
      ids: params.id,
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.token}`,
    },
  });
  return response;
});
export const deleteTracksThunk = createAsyncThunk(
  "delete/tracks",
  async (params) => {
    const response = await deleteFavouriteTrack({
      params: {
        ids: params.id,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.token}`,
      },
    });
    return response;
  }
);

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState: { id: null },
  reducers: {
    addTrack: (state, actions) => {
      return { ...state, id: actions.payload };
    },
  },
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

export const { addTrack } = favouriteSlice.actions;

export default favouriteSlice.reducer;
