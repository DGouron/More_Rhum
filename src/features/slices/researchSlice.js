import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabIdSelected: 0,
  researchs: [],
};

export const researchSlice = createSlice({
  name: "research",
  initialState,
  reducers: {
    setTabIdSelected: (state, action) => {
      state.tabIdSelected = action.payload;
    },
    addResearch: (state, action) => { 
      const index = state.researchs.findIndex((targetResearch) => targetResearch.id === action.payload.id);

      if(index !== -1) {
        state.researchs = UpgradeResearch(state.researchs, index);
      }else{
        state.researchs.push(action.payload);
        state.researchs = UpgradeResearch(state.researchs, state.researchs.length - 1);
      }
    },
  },
});

function UpgradeResearch(researchs, indexToUpgrade){
  let upgradedResearch = [...researchs];
    upgradedResearch[indexToUpgrade].cost = Math.round(upgradedResearch[indexToUpgrade].cost * 1.1);
    upgradedResearch[indexToUpgrade].level += 1;
  return upgradedResearch;
}
// Action creators are generated for each case reducer function
export const { setTabIdSelected, addResearch } = researchSlice.actions;
export default researchSlice.reducer;
