import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTrack, getPlaylist, postNewTrack } from "Services/Services";

export const getPlaylistThunk = createAsyncThunk("playlist", async (params) => {
  const { id, token } = params;

  const response = await getPlaylist(id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
});

export const addPlaylistThunk = createAsyncThunk(
  "post/playlist",
  async (params) => {
    const response = await postNewTrack(
      params.id,
      { uris: [params.uris] },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${params.token}`,
        },
      }
    );
    return response;
  }
);
export const deletePlaylistThunk = createAsyncThunk(
  "delete/playlist",
  async (params) => {
    const response = await deleteTrack(params.id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.token}`,
      },
      data: {
        tracks: [
          {
            uri: params.uris,
          },
        ],
      },
    });
    return response;
  }
);
const initialState = "";

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    updateDetails: (state, actions) => {
      return (state = {
        ...state,
        description: actions.payload.des,
        name: actions.payload.namePlaylist,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylistThunk.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      .addCase(addPlaylistThunk.fulfilled, (state, action) => {
        return (state = action.payload);
      })
      .addCase(deletePlaylistThunk.fulfilled, (state, action) => {
        return (state = action.payload);
      });
  },
});

export const { updateDetails } = playlistSlice.actions;

export default playlistSlice.reducer;
