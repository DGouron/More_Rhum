import React from 'react'
import coinLogo from "../../assets/pirateCoin.png";
import useNormalizeNumber from '../../hooks/useNormalizeNumber';

function CoinReward(props) {
  return (
    <div className='reward__coin'>+{useNormalizeNumber(props.rewardAmount)} <img src={coinLogo} alt="Icone pièce d'or" className="Experience__icone"/></div>
  )
}

export default CoinReward