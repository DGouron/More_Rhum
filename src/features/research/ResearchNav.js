import React from 'react'
import { data_research } from '../data/data_research';
import ResearchTab from './ResearchTab';
import Tooltip from './Tooltip';

function ResearchNav() {
  return (
    <div className='research__nav--container'>
      <Tooltip />
        {data_research.map((researchBranch) => {
            return (
                <ResearchTab researchBranch={researchBranch}/>
            )
        })}
    </div>
  )
}

export default ResearchNav