import React, { useEffect, useState } from 'react'
import bottle from '../../assets/rhum_bottle.webp';
import coinLogo from "../../assets/pirateCoin.webp";
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

  const currentRhum = useSelector((state) => state.counter.rhum);

  const researchs = useSelector((state) => state.research.researchs);
  const currentResearchData = FindResearch(props.research.id, researchs);
  const researchCost = currentResearchData ? currentResearchData.cost : props.research.cost;
  const researchLevel = currentResearchData ? currentResearchData.level : 0;
  const researchExperienceReward = currentResearchData ? currentResearchData.experienceReward : props.research.experienceReward;

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
        <div className='research__informations--row'>
          {props.research.goldAutoReward > 0 && props.research.level >= 1 
          ? <p>{researchGoldReward}<img src={coinLogo} alt="Icone pièce d'or" className="research__monney--icone"/> / {Math.round(props.research.time / 1000)} seconds</p>
          : <p>{props.research.effectMessage}</p>}
          <p>Coût : {useNormalizeNumber(researchCost)}<img className="research__monney--icone" src={bottle} alt="Icone rhum bottle monney"/></p>
        </div>
        <p>{props.research.description}</p>
        <div className='research__informations--row'>
          {currentCaptainLevel >= props.research.captainLevelRequired 
          ? currentRhum >= researchCost 
            ? <button className='research__upgrade--button' onClick={() => HandleClick()}>{props.research.ctaMessage}</button>
            : <p>Pas assez de Rhum</p> 
          : <p>Capitaine Niv.{props.research.captainLevelRequired} requis</p>}
          <p><i>Gain d'XP : {useNormalizeNumber(researchExperienceReward)}</i></p>
        </div>
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