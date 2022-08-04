import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementMoneyByAmount, incrementRhumByAmount, modifyConvertTaux } from './slices/counterSlice';
import coin from '../assets/pirateCoin.png';
import bottleOfRhum from '../assets/rhum_bottle.png';

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
    <div className='convert__button--wrapper'>
        <button onClick={() => HandleClick()}>
          Acheter Rhum
        </button>
        <p>
          Prix : {currentConvertTaux}<img className="Money__icone" src={bottleOfRhum} alt="Icone bouteille de Rhum monney"/> pour 1<img src={coin} alt="Coin icone for convert button" className="Money__icone"/>
        </p>
    
    </div>
  )
}

export default ConvertButton