import React from 'react'
import { useSelector } from 'react-redux';
import coin from '../assets/pirateCoin.png';

function MoneyView() {
    const count = useSelector((state) => state.counter.money);
  return (
    <div className='Moneyview__wrapper'>{count}
      <img className="Money__icone" src={coin} alt="Icone pirate coin monney"/>
    </div>
  )
}

export default MoneyView