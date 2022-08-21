import React from 'react'
import coinLogo from "../../assets/pirateCoin.png";

function CoinReward(props) {
  return (
    <div className='reward__coin'>+{props.rewardAmount} <img src={coinLogo} alt="Icone pièce d'or" className="Experience__icone"/></div>
  )
}

export default CoinReward