import React from 'react'
import { data_research } from '../data/data_research';
import ResearchTab from './ResearchTab';

function ResearchBox() {
  return (
    <section className="research__container">
        <h2>Research</h2>
        {data_research.map((researchBranch) => {
            return (
                <ResearchTab researchBranch={researchBranch}/>
            )
        })}
    </section>
  )
}

export default ResearchBox