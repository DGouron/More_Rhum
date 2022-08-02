import React from 'react'
import ConvertButton from './ConvertButton'
import LevelView from './Level/LevelView'
import LitterView from './RhumView'
import MoneyView from './MoneyView'

function Header() {
  return (
    <header>
      <LevelView />
      <MoneyView />
      <ConvertButton />
      <LitterView />
      <h1>More Rhum - Take all the rhum of the world for your pirate team</h1>
    </header>
  )
}

export default Header