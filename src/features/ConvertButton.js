import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementRhumByAmount, incrementMoneyByAmount, modifyConvertTaux } from './slices/counterSlice';

function ConvertButton() {
  const dispatch = useDispatch();
  const rhumQuantity = useSelector((state) => state.counter.rhum);
  let currentConvertTaux = useSelector((state) => state.counter.convertTaux);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      dispatch(modifyConvertTaux(Math.round(Math.random() * (10.5 - 1) + 0.5)));
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [currentConvertTaux, dispatch]);

  const HandleClick = () => {
    let moneyQuantity = rhumQuantity * currentConvertTaux;
    moneyQuantity = Math.round(moneyQuantity);
    dispatch(decrementRhumByAmount(rhumQuantity));
    dispatch(incrementMoneyByAmount(moneyQuantity));
  }
  return (
    <div className='Conver__wrapper'>
        <button onClick={() => HandleClick()}>Sell Rhum</button>
        <h4>Taux = 1 : {currentConvertTaux}</h4>
    </div>
  )
}

export default ConvertButton