import React from 'react'
import xpLogo from "../../assets/xplogo.webp";
import { useSelector } from 'react-redux';
import useNormalizeNumber from '../../hooks/useNormalizeNumber';

function LevelView() {
  const captainLevel = useSelector((state) => state.userStats.captainLevel);
  const currentExperience = useSelector((state) => state.userStats.experience);
  const experienceRequired = useSelector((state) => state.userStats.experienceRequired);
  return (
    <div className='header__levelView--wrapper'>
      <p>Capitaine niv. : {captainLevel}</p>
      <div className='header__levelView--xpview'>
        <img src={xpLogo} alt="Icone experience" className="Experience__icone"/>
        <div class="header__progressbar--container">
            <div className="header__progressbar--wrapper">
                <div title="experience percent view" className="progressbar header__progressbar--percent" style={{ "--xp-percent": 100 * currentExperience / experienceRequired}}>
                </div>
          </div>
          <p>{useNormalizeNumber(currentExperience)}/{useNormalizeNumber(experienceRequired)}</p>
        </div>
      </div>
    </div>
  )
}

export default LevelView