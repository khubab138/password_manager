import { createSlice } from "@reduxjs/toolkit";

export const SectionSlice = createSlice({
  name: "login",
  initialState: {
    value: "Website",
  },
  reducers: {
    check: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { check } = SectionSlice.actions;
export default SectionSlice.reducer;
