import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rewards: [],
    refreshAutoRewards: false,
    refreshTimers: false,
    timers: [],
};

export const timersSlice = createSlice({
  name: "timers",
  initialState,
  reducers: {
    setRefreshTimers: (state, action) => {
      state.refreshTimers = action.payload;
    },
    setClockTick: (state, action) => {
        state.clockTick = action.payload;
    },
    updateTimersList: (state, action) => {
      if(action.payload.length > 0){

        for(let i = 0; i < action.payload.length; i++){
          let researchItem = action.payload[i];
          if(Object.keys(researchItem).findIndex((key) => key === "goldAutoReward") !== -1 
                                                    && researchItem.goldAutoReward !== 0){ 
              let index = state.timers.findIndex((targetTimer) => targetTimer.id === researchItem.id);
              if(index === -1){
                state.timers.push(makeResearchTimer(researchItem));
              }
            }
        }
      }
    },
    throttleClockTick: (state, action) => {
      if(state.timers.length > 0){
        let timers = [...state.timers];
        for(let i = 0; i < timers.length; i++){
          if(timers[i].timer < timers[i].timerReached){
            timers[i].timer += 1000;
          }else{
            let newReward = [...state.rewards.filter((reward) => reward.id !== timers[i].id)];
            newReward.push({
              id: timers[i].id, 
              type: "Coin",
              alreadyReward: false,
            });
            state.rewards = newReward;

            state.refreshAutoRewards = true;
            timers[i].timer = 0;
          }
        }
        state.timers = timers;
      }
    },
    setRefreshAutoRewards: (state, action) => {
        state.refreshAutoRewards = action.payload;
    },
    setAlreadyReward: (state, action) => {
      const index = state.rewards.findIndex((targetReward) => targetReward.id === action.payload);
      if(index !== -1){
        let upgradedRewards = [...state.rewards];
        upgradedRewards[index].alreadyReward = true;
        state.rewards = upgradedRewards;
      }
    }
  },
});

function makeResearchTimer(research){
  return {
    id: research.id,
    timerReached: research.time,
    timer: 0,
  };
}
// Action creators are generated for each case reducer function
export const { setRefreshTimers, setClockTick, updateTimersList, throttleClockTick, setRefreshAutoRewards, setAlreadyReward } = timersSlice.actions;
export default timersSlice.reducer;