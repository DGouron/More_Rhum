import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counterSlice";
import researchReducer from "../features/slices/researchSlice";
import userStatsReducer from "../features/slices/userStatsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    research: researchReducer,
    userStats: userStatsReducer,
  },
});

export default store;
