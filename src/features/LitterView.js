import React from 'react'
import { useSelector } from 'react-redux';

function LitterView() {
  const count = useSelector((state) => state.counter.rhum);
  return (
    <div className='Moneyview__wrapper'>Litter of Rhum : {count}L</div>
  )
}

export default LitterView