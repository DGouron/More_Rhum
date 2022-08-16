import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRefreshTimers, updateTimersList, throttleClockTick } from "../features/slices/timersSlice";

export function useResearchTimer(){
    const dispatch = useDispatch();
    const refreshTimers = useSelector((state) => state.timers.refreshTimers);
    const currentResearch = useSelector((state) => state.research.researchs);


    useEffect(() => {

            if(refreshTimers === true){
              dispatch(updateTimersList(currentResearch));
              dispatch(setRefreshTimers(false));
            }
    } , [refreshTimers, currentResearch, dispatch]);
    
    useEffect(() => {
        const tickInterval = setInterval(() => {
            dispatch(throttleClockTick());
        }, 1000);

        return () => {
          clearInterval(tickInterval);
        }
      }, [ dispatch ]);
        
}

export default useResearchTimer;