import React from 'react'
import ResearchNav from './ResearchNav';
import ResearchView from './ResearchView';

function ResearchBox() {

  return (
    <section className="research__container">
        <h2>Research</h2>
        <ResearchView />
        <ResearchNav />
    </section>
  )
}

export default ResearchBox