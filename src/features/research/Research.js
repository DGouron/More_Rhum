import React, { useEffect, useState } from 'react'
import bottle from '../../assets/rhum_bottle.png';
import { useSelector, useDispatch } from 'react-redux';
import { increaseExperienceByAmount } from '../slices/userStatsSlice';
import { decrementRhumByAmount } from '../slices/counterSlice';
import { addResearch } from '../slices/researchSlice';
import ExperienceReward from '../rewards/ExperienceReward';
import ResearchProgressbar from './ResearchProgressbar';

function Research(props) {
  const dispatch = useDispatch();
  const curretCaptainLevel = useSelector((state) => state.userStats.captainLevel);
  const researchs = useSelector((state) => state.research.researchs);
  const currentRhum = useSelector((state) => state.counter.rhum);
  const currentResearchData = FindResearch(props.research.id, researchs);
  const tick = 10;
  const timerReached = 1000;
  const [currentTimer, setCurrentTimer] = useState(0);
  const researchCost = currentResearchData ? currentResearchData.cost : props.research.cost;
  const researchLevel = currentResearchData ? currentResearchData.level : 0;

  const [reward, setReward] = useState([]);
  const maxRewardsLength = 30;
  
  //Dont add auto reward in this component because it will be destroy when the player switch tab

  useEffect(() => {
    const tickInterval = setInterval(() => {
      if(currentTimer < timerReached) {
        setCurrentTimer(currentTimer + tick);
      } else {
        setCurrentTimer(0);
      }
    }, tick);

    return () => {
      clearInterval(tickInterval);
    }
  }, [timerReached, currentTimer]);
  useEffect(() => {
    if(reward.length > 0){
      if(reward.length >= maxRewardsLength){
        setReward([]);
      }
    }
  }, [reward]);
  return (
    <div className='research__wrapper'>
        <ResearchProgressbar percent={100 * currentTimer / timerReached}/>
        <h3>{props.research.name} | Niv. {researchLevel}</h3>
        <p>{props.research.description}</p>
        <p>Coût : {researchCost}<img className="Money__icone" src={bottle} alt="Icone rhum bottle monney"/></p>
        <p>Capitaine Niv.{props.research.captainLevelRequired}</p>
        {curretCaptainLevel >= props.research.captainLevelRequired && currentRhum >= researchCost ?
          <button className='Upgrade__button' onClick={() => HandleClick()}>{props.research.ctaMessage}</button>
          : null}
        {reward.map((reward) => {return <ExperienceReward rewardAmount={reward.quantity} />})}
    </div>
  )

  function HandleClick() {
    dispatch(decrementRhumByAmount(researchCost));
    dispatch(addResearch(props.research));

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