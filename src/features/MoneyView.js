import React from 'react'
import { useSelector } from 'react-redux';

function MoneyView() {
    const count = useSelector((state) => state.counter.value);
  return (
    <><p>Money : {count}$</p></>
  )
}

export default MoneyView