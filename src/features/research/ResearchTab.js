import React from 'react'
import { useDispatch } from "react-redux";
import { setTabIdSelected } from "../slices/researchSlice";

function ResearchTab(props) {
  const dispatch = useDispatch();

  return (
    <div className="research__tab">
            <button onClick={() => handleClick()}>
                <h3>{props.researchBranch.type}</h3>
            </button>
    </div>
  )

  function handleClick() {
    dispatch(setTabIdSelected(props.researchBranch.id));
  }
}

export default ResearchTab