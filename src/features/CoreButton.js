import React, { useState } from 'react'
import coinIcone from "../assets/pirateCoin.webp";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementMoneyByAmount } from "./slices/counterSlice";
import CoinReward from './rewards/CoinReward';
import useBindToResearch from '../hooks/useBindToResearch';

function CoreButton() {
  let clickEfficace = useBindToResearch("am-2");
  let clickCoinAmount = clickEfficace !== undefined ?  Math.round(1.5 * clickEfficace.level) : 1;
  console.log(clickEfficace);
  const dispatch = useDispatch();
  const [reward, setReward] = useState([]);
  const maxRewardsLength = 30;

  useEffect(() => {
  if(reward.length > 0){
    if(reward.length >= maxRewardsLength){
      setReward([]);
    }
  }
  }, [reward]);

  return (
    <section className='Corebutton__wrapper'>
        <button
            className="coin__button"
            onClick={() => {
            handleClick();
            }}
        >
            <img src={coinIcone} className="bottle" alt="bottle" />
        </button>
        {reward.map((reward) => {return <CoinReward rewardAmount={reward.quantity} />})}
    </section>
  )
  function handleClick() {
     //Delayed rewarding
     let newReward = [...reward];
     newReward.push({quantity: clickCoinAmount, type: 'COIN'});
     setReward(newReward);
     setTimeout(() => {
        dispatch(incrementMoneyByAmount(clickCoinAmount));
     }, 1000);
  }
}

export default CoreButton