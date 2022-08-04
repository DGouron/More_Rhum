import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  captainLevel: 1,
  experience: 40,
  experienceRequired: 100,
};

export const userStatsSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    LevelUp: (state, action) => {
      state.captainLevel += 1;
    },
    IncreaseExperienceByAmount: (state, action) => {
      state.experience += action.payload;
    },
    SetExperienceRequired: (state, action) => {
      state.experienceRequired = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { LevelUp, IncreaseExperienceByAmount, SetExperienceRequired } = userStatsSlice.actions;
export default userStatsSlice.reducer;
