import React from 'react'
import { useSelector } from 'react-redux';
import coin from '../assets/pirateCoin.webp';
import useNormalizeNumber from '../hooks/useNormalizeNumber';

function MoneyView() {
    const count = useSelector((state) => state.counter.money);
  return (
    <div className='Moneyview__wrapper'>{useNormalizeNumber(count)}
      <img className="Money__icone" src={coin} alt="Icone pirate coin monney"/>
    </div>
  )
}

export default MoneyView