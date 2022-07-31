import React from 'react'
import { data_research } from '../data/data_research';
import { useSelector } from 'react-redux';
import Research from './Research';

function ResearchView() {
  let tabIdSelected = useSelector((state) => state.research.tabIdSelected);;

  return (
    <div className='research__view--container'>
      {tabIdSelected !== -1 && data_research !== undefined ? data_research[tabIdSelected].research.map((research) => {
        return (
          <Research research={research}/>
        )})
        : null
      }
    </div>
  )
}

export default ResearchView