import React from 'react'
import { data_research } from '../data/data_research';
import ResearchTab from './ResearchTab';

function ResearchNav() {
  return (
    <div className='research__nav--container'>
        {data_research.map((researchBranch) => {
            return (
                <ResearchTab researchBranch={researchBranch} key={researchBranch.id} />
            )
        })}
    </div>
  )
}

export default ResearchNav