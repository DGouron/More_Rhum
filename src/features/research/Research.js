import React from 'react'

function Research(props) {
  return (
    <div className='research__tab__content'>
        <h3>{props.research.name}</h3>
        <p>{props.research.description}</p>
        <p>Coût : {props.research.cost}$</p>
        <button className='Upgrade__button'>Upgrader</button>
    </div>
  )
}

export default Research