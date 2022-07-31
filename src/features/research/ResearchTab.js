import React from 'react'
import { useDispatch } from "react-redux";
import { setTabIdSelected } from "../slices/researchSlice";

function ResearchTab(props) {
  const dispatch = useDispatch();

  return (
    <div className="research__tab">
            <button onClick={() => handleClick()}>
                <h3>0 / {props.researchBranch.research.length}</h3>
                <h4>{props.researchBranch.type}</h4>
            </button>
    </div>
  )

  function handleClick() {
    dispatch(setTabIdSelected(props.researchBranch.id));
  }
}

export default ResearchTab