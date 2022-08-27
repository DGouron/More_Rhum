import React from 'react'
import ConvertButton from './ConvertButton'
import LevelView from './Level/LevelView'
import LitterView from './RhumView'
import MoneyView from './MoneyView'

function Header() {
  return (
    <header>
      <LevelView />
      <div className='Money__row'>
        <MoneyView />
        <LitterView />
      </div>
      <ConvertButton />
      <h1>More Rhum - Construisez la plus grande équipe de pirate</h1>
    </header>
  )
}

export default Header