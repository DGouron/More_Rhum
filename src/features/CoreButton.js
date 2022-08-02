import React from 'react'
import coinIcone from "../assets/pirateCoin.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementMoneyByAmount, incrementMoney } from "./slices/counterSlice";

function CoreButton() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      let interval = null;
  
      interval = setInterval(() => {
        dispatch(incrementMoney());
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
    </section>
  )
  function handleClick() {
    dispatch(incrementMoneyByAmount(10));
  }
}

export default CoreButton