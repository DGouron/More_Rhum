import React from 'react'
import ResearchNav from './ResearchNav';
import ResearchView from './ResearchView';

function ResearchBox() {

  return (
    <section className="research__container">
        <ResearchView />
        <ResearchNav />
    </section>
  )
}

export default ResearchBox