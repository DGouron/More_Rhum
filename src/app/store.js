import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/counterSlice";
import researchReducer from "../features/slices/researchSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    research: researchReducer,
  },
});

export default store;
