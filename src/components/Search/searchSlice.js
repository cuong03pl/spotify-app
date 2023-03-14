import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateInputValue: (state, actions) => {
      return (state = actions.payload);
    },
    clearInputValue: (state) => {
      return (state = initialState);
    },
  },
});

export const { updateInputValue, clearInputValue } = searchSlice.actions;

export default searchSlice.reducer;
