import React, { useState } from 'react'
import coinIcone from "../assets/pirateCoin.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementMoneyByAmount, incrementMoney } from "./slices/counterSlice";
import CoinReward from './rewards/CoinReward';

function CoreButton() {
  let clickCoinAmount = 1;
  //To do -> incrémenter le montant via recherches
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

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      //dispatch(incrementMoney());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
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