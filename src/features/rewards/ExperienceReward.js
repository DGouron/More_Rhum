import React from 'react'
import xpLogo from "../../assets/xplogo.png";

function ExperienceReward(props) {
  return (
    <div className='reward__experience'>+{props.rewardAmount} <img src={xpLogo} alt="Icone experience" className="Experience__icone"/></div>
  )
}

export default ExperienceReward