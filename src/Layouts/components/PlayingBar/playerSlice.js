import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: { id: null, isPlay: false, url: null, type: null },
  reducers: {
    setPlayingTrack: (state, actions) => {
      return { ...state, id: actions.payload };
    },
    setPlayPause: (state, actions) => {
      return { ...state, isPlay: actions.payload };
    },
    setUrlCurrentTrack: (state, actions) => {
      return { ...state, url: actions.payload };
    },
    setType: (state, actions) => {
      return { ...state, type: actions.payload };
    },
  },
});
export const { setPlayingTrack, setPlayPause, setUrlCurrentTrack, setType } =
  playerSlice.actions;

export default playerSlice.reducer;
