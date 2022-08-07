import React from 'react'

function ResearchProgressbar(props) {
    //Visual component only, dont need any logic
  return (
    <div className='research__progress' style={{"--research--progress-percent": props.percent}}> </div>
  )
}

export default ResearchProgressbar