import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counterSlice";
import researchReducer from "../features/slices/researchSlice";
import userStatsReducer from "../features/slices/userStatsSlice";
import timersReducer from "../features/slices/timersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    research: researchReducer,
    userStats: userStatsReducer,
    timers: timersReducer,
  },
});

export default store;
