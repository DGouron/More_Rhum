import React from 'react'
import Research from './Research'

function ResearchTab(props) {

  return (
    <div className="research__tab">
            <button>
                <h3>0 / {props.researchBranch.research.length}</h3>
                <h4>{props.researchBranch.type}</h4>
            </button>
    </div>
  )
}

export default ResearchTab