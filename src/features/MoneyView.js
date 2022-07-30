import React from 'react'
import { useSelector } from 'react-redux';

function MoneyView() {
    const count = useSelector((state) => state.counter.money);
  return (
    <div className='Moneyview__wrapper'><p>Money : {count}$</p></div>
  )
}

export default MoneyView