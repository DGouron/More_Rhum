import { useSelector } from 'react-redux';

export function useBindToResearch(reasearchId){
    let research = useSelector((state) => state.research.researchs.find((research) => research.id === reasearchId));
    
    if(research === undefined){
        return undefined;
    }else{
        return research;
    }
}

export default useBindToResearch;