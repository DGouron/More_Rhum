import React, { useEffect, useState } from 'react'
import { data_research } from '../data/data_research';
import { useSelector, useDispatch } from 'react-redux';
import Research from './Research';
import useResearchTimer from '../../hooks/useResearchTimer';
import { incrementMoneyByAmount } from '../slices/counterSlice';
import CoinReward from '../rewards/CoinReward';
import { setAlreadyReward, setRefreshAutoRewards } from '../slices/timersSlice';

function ResearchView() {


  const dispatch = useDispatch();
  const researchs = useSelector((state) => state.research.researchs);
  let tabIdSelected = useSelector((state) => state.research.tabIdSelected);
  let timers = useSelector((state) => state.timers.timers);
  const refreshAutoRewards = useSelector((state) => state.timers.refreshAutoRewards);
  let rewards = useSelector((state) => state.timers.rewards);

  const [reward, setReward] = useState([]);
  const maxRewardsLength = 30;


useEffect(() => {

  if(refreshAutoRewards === true){
    let currentRewards = [...reward];
    console.log(rewards);
    rewards.forEach((reward) => { 
      dispatch(setAlreadyReward(reward.id, true));
      if(reward.alreadyReward === false){
        const research = researchs.find((research) => research.id === reward.id);
        let goldRewardQuantity = Math.round(research.goldAutoReward * research.level * 2.1);

        let tempReward ={
          id: reward.id,
          quantity: goldRewardQuantity,
          type: 'Coin',
        };
        currentRewards.push(tempReward);
        setReward(currentRewards);
        dispatch(incrementMoneyByAmount(goldRewardQuantity));
      }
    });
    
    setReward(currentRewards);
    dispatch(setRefreshAutoRewards(false));
  }
} , [refreshAutoRewards, dispatch, reward, timers, rewards, researchs]);

 useEffect(() => {
  if(reward.length > 0){
    if(reward.length >= maxRewardsLength){
      setReward([]);
    }
  }
}, [reward]);

  useResearchTimer();

  return (
    <div className='research__view--container'>
      {tabIdSelected !== -1 && data_research !== undefined ? data_research[tabIdSelected].research.map((research) => {
        return (
          <Research research={research}/>
        )})
        : null
      }
      {reward.map((reward) => { return <CoinReward rewardAmount={reward.quantity} />})}
    </div>
  )
}

export default ResearchView