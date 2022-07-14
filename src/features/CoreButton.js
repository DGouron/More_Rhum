import React from 'react'
import bottle from "../assets/rhum_bottle.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount, increment } from "../features/counter/counterSlice";

function CoreButton() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      let interval = null;
  
      interval = setInterval(() => {
        dispatch(increment());
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    });
  return (
    <section>
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
    dispatch(incrementByAmount(10));
  }
}

export default CoreButton