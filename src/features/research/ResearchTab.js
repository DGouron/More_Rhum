import React from 'react'
import Research from './Research'

function ResearchTab(props) {

  return (
    <div className="research__tab">
       <input type="radio" name="research" id={props.researchBranch.type} />
            <label htmlFor={props.researchBranch.type}>
                <h3>0 / {props.researchBranch.research.length}</h3>
                <h4>{props.researchBranch.type}</h4>
            </label>
            {props.researchBranch.research.map((research) => {
            return (
                <Research name={research.name} description={research.description} cost={research.cost} time={research.time}/>
            )
        })}
    </div>
  )
}

export default ResearchTab