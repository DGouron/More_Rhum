import React from 'react'
import bottle from '../../assets/rhum_bottle.png';

function Research(props) {
  return (
    <div className='research__tab__content'>
        <h3>{props.research.name}</h3>
        <p>{props.research.description}</p>
        <p>Coût : {props.research.cost}<img className="Money__icone" src={bottle} alt="Icone rhum bottle monney"/></p>
        <button className='Upgrade__button'>Upgrader</button>
    </div>
  )
}

export default Research