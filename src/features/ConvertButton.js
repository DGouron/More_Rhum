import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementMoneyByAmount, incrementRhumByAmount, modifyConvertTaux } from './slices/counterSlice';

function ConvertButton() {
  const dispatch = useDispatch();
  const moneyQuantity = useSelector((state) => state.counter.money);
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
    let rhumQuantity = Math.round(moneyQuantity * currentConvertTaux);

    dispatch(decrementMoneyByAmount(moneyQuantity));
    dispatch(incrementRhumByAmount(rhumQuantity));
  }
  return (
    <div className='Conver__wrapper'>
        <button onClick={() => HandleClick()}>Buy Rhum</button>
        <h4>Taux = 1 : {currentConvertTaux}</h4>
    </div>
  )
}

export default ConvertButton