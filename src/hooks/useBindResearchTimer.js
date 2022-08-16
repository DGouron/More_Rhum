import { useSelector } from 'react-redux';

export function useBindReasearchTimer(reasearchId){
    let timer = useSelector((state) => state.timers.timers.find((timer) => timer.id === reasearchId));
    
    if(timer === undefined){
        return 0;
    }else{
        console.log(100 * timer.timer / timer.timerReached);
        return Math.round((100 * timer.timer / timer.timerReached) / 100);
    }
}

export default useBindReasearchTimer;