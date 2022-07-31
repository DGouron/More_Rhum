import React from 'react'
import bottle from "../assets/rhum_bottle.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementRhumByAmount, incrementRhum } from "./slices/counterSlice";

function CoreButton() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      let interval = null;
  
      interval = setInterval(() => {
        dispatch(incrementRhum());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    });
  return (
    <section className='Corebutton__wrapper'>
        <button
            className="rhum__button"
            onClick={() => {
            handleClick();
            }}
        >
            <img src={bottle} className="bottle" alt="bottle" />
        </button>
    </section>
  )
  function handleClick() {
    dispatch(incrementRhumByAmount(10));
  }
}

export default CoreButton