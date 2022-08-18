import React, { useEffect, useState } from 'react'
import bottle from '../../assets/rhum_bottle.png';
import { useSelector, useDispatch } from 'react-redux';
import { increaseExperienceByAmount } from '../slices/userStatsSlice';
import { decrementRhumByAmount } from '../slices/counterSlice';
import { addResearch } from '../slices/researchSlice';
import ExperienceReward from '../rewards/ExperienceReward';
import ResearchProgressbar from './ResearchProgressbar';
import { setRefreshTimers } from '../slices/timersSlice';
import useNormalizeNumber from '../../hooks/useNormalizeNumber';

function Research(props) {
  const dispatch = useDispatch();
  const currentTimer = useSelector((state) => state.timers.timers.find((timer) => timer.id === props.research.id));
  const currentCaptainLevel = useSelector((state) => state.userStats.captainLevel);
  console.log(currentCaptainLevel);
  const currentRhum = useSelector((state) => state.counter.rhum);

  const researchs = useSelector((state) => state.research.researchs);
  const currentResearchData = FindResearch(props.research.id, researchs);
  const researchCost = currentResearchData ? currentResearchData.cost : props.research.cost;
  const researchLevel = currentResearchData ? currentResearchData.level : 0;

  const [reward, setReward] = useState([]);
  const maxRewardsLength = 30;

  const researchGoldReward = useNormalizeNumber(Math.round(props.research.goldAutoReward * researchLevel * 1.6))
  //Dont add auto reward in this component because it will be destroy when the player switch tab

  useEffect(() => {
    if(reward.length > 0){
      if(reward.length >= maxRewardsLength){
        setReward([]);
      }
    }
  }, [reward]);
  return (
    <div className='research__wrapper'>
        <ResearchProgressbar percent={currentTimer !== undefined ? 100 * currentTimer.timer / currentTimer.timerReached : 0}/>
        <h3>{props.research.name} | Niv. {researchLevel}</h3>
        {props.research.goldAutoReward > 0 ? 
        <p>{researchGoldReward} gold / {Math.round(props.research.time / 1000)} seconds</p>
        : null}
        <p>{props.research.description}</p>
        <p>Coût : {useNormalizeNumber(researchCost)}<img className="Money__icone" src={bottle} alt="Icone rhum bottle monney"/></p>
        <p>Capitaine Niv.{props.research.captainLevelRequired}</p>
        {currentCaptainLevel >= props.research.captainLevelRequired && currentRhum >= researchCost ?
          <button className='Upgrade__button' onClick={() => HandleClick()}>{props.research.ctaMessage}</button>
          : null}
        {reward.map((reward) => {return <ExperienceReward rewardAmount={reward.quantity} />})}
    </div>
  )

  function HandleClick() {
    dispatch(decrementRhumByAmount(researchCost));
    dispatch(addResearch(props.research));
    dispatch(setRefreshTimers(true));

    //Delayed rewarding
    let newReward = [...reward];
    newReward.push({quantity: props.research.experienceReward, type: 'XP'});
    setReward(newReward);
    setTimeout(() => {
      dispatch(increaseExperienceByAmount(props.research.experienceReward));
    }, 1000);
  }

  function FindResearch(id, researchs) {
    return researchs.find((research) => research.id === id);
  }
}

export default Research