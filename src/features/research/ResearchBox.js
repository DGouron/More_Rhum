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
        <div className="research__tab">
            <input type="radio" name="research" id="research1" />
            <label htmlFor="research1">
                <h3>Research 1</h3>
                <h4>Construction</h4>
            </label>
            <div className='research__tab__content'>
                <button>Boat</button>
            </div>
        </div>
        <div className="research__tab">
            <input type="radio" name="research" id="research2" />
            <label htmlFor="research2">
                <h3>Research 2</h3>
                <h4>Amelioration</h4>
            </label>
            <div className='research__tab__content'>
                <button>Click efficient</button>
            </div>
        </div>
        <div className="research__tab">
            <input type="radio" name="research" id="research3" />
            <label htmlFor="research3">
                <h3>Fonctionnement</h3>
                <h4>Chaque recherche débloque des bonus ou de nouvelles construction. Cependant, plus le niveau de la recherche est élevé, 
                    plus son coût et son temps de recherche augmente
                </h4>
            </label>
            <div className='research__tab__content'>
                <button className='research__tab__content--position'>Click efficient</button>
            </div>
        </div>
    </section>
  )
}

export default ResearchBox