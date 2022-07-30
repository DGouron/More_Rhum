import React from 'react'

function Research(props) {
  return (
    <div className='research__tab__content'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p>Coût : {props.cost}$</p>
        <button className='Upgrade__button'>Upgrader</button>
    </div>
  )
}

export default Research