import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        console.log(action.payload);

        for(let i = 0; i < action.payload.length; i++){
          let researchItem = action.payload[i];
          console.log(researchItem);
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
            timers[i].timer = 0;
          }
        }
        state.timers = timers;
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
export const { setRefreshTimers, setClockTick, updateTimersList, throttleClockTick } = timersSlice.actions;
export default timersSlice.reducer;