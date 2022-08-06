import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  captainLevel: 111,
  experience: 0,
  experienceRequired: 100,
};

export const userStatsSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    increaseExperienceByAmount: (state, action) => {
      state.experience += action.payload;
      if(state.experience >= state.experienceRequired) {
        state.captainLevel += 1;
        state.experience = 0;
        state.experienceRequired = Math.round(state.experienceRequired * 1.5);
      }
    },
    setExperienceRequired: (state, action) => {
      state.experienceRequired = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { increaseExperienceByAmount, setExperienceRequired } = userStatsSlice.actions;
export default userStatsSlice.reducer;
