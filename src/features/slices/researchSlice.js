import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabIdSelected: 0,
};

export const researchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    setTabIdSelected: (state, action) => {
      state.tabIdSelected = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setTabIdSelected } = researchSlice.actions;
export default researchSlice.reducer;
