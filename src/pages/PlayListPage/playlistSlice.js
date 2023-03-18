import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlaylist } from "Services/Services";
const token = localStorage.getItem("token");

export const getPlaylistThunk = createAsyncThunk("playlist", async (id) => {
  const response = await getPlaylist(id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
});

const initialState = "";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    updateDetails: (state, actions) => {
      console.log(actions.payload);
      return (state = {
        ...state,
        description: actions.payload.des,
        name: actions.payload.namePlaylist,
      });
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getPlaylistThunk.fulfilled, (state, action) => {
      // Add user to the state array
      return (state = action.payload);
    });
  },
});

export const { updateDetails } = playlistSlice.actions;

export default playlistSlice.reducer;
