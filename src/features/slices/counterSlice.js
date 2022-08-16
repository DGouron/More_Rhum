import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  convertTaux: 1,
  rhum: 200000,
  money: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    modifyConvertTaux: (state, action) => {
      state.convertTaux = action.payload;
    },
    incrementMoney: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.money += 1;
    },
    decrementMoney: (state) => {
      state.money -= 1;
    },
    incrementMoneyByAmount: (state, action) => {
      state.money += action.payload;
    },
    decrementMoneyByAmount: (state, action) => {
      state.money -= action.payload;
    },
    incrementRhum: (state) => {
      state.rhum += 1;
    },
    decrementRhum: (state) => {
      state.rhum -= 1;
    },
    incrementRhumByAmount: (state, action) => {
      state.rhum += action.payload;
    },
    decrementRhumByAmount: (state, action) => {
      state.rhum -= action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { modifyConvertTaux } = counterSlice.actions;
export const { incrementMoney, decrementMoney, incrementMoneyByAmount, decrementMoneyByAmount } = counterSlice.actions;
export const { incrementRhum, decrementRhum, incrementRhumByAmount, decrementRhumByAmount } = counterSlice.actions;
export default counterSlice.reducer;
