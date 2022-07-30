import React from 'react'
import ConvertButton from './ConvertButton'
import LitterView from './LitterView'
import MoneyView from './MoneyView'

function Header() {
  return (
    <header>
      <LitterView />
      <ConvertButton />
      <MoneyView />
      <h1>More Rhum - Take all the rhum of the world for your pirate team</h1>
    </header>
  )
}

export default Header