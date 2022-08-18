import React from 'react'
import { useSelector } from 'react-redux';
import bottleOfRhum from '../assets/rhum_bottle.png';
import useNormalizeNumber from '../hooks/useNormalizeNumber';

function RhumView() {
  const count = useSelector((state) => state.counter.rhum);
  return (
    <div className='Moneyview__wrapper'>{useNormalizeNumber(count)}<img className="Money__icone" src={bottleOfRhum} alt="Icone bouteille de Rhum monney"/></div>
  )
}

export default RhumView