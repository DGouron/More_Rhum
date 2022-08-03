import React from 'react'
import xpLogo from "../../assets/xplogo.png";
import { useSelector } from 'react-redux';

function LevelView() {
  const captainLevel = useSelector((state) => state.userStats.captainLevel);
  const currentExperience = useSelector((state) => state.userStats.experience);
  const experienceRequired = useSelector((state) => state.userStats.experienceRequired);
  return (
    <div>
      <p>Capitaine niv. : {captainLevel}</p>
      <p><img src={xpLogo} alt="Icone experience" className="Money__icone"/> {currentExperience}/{experienceRequired}</p>
    </div>
  )
}

export default LevelView