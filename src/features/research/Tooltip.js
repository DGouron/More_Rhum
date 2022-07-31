import React, { useEffect, useState } from 'react'

function Tooltip(props) {
    const [target, setTarget] = useState(null);

    useEffect(() => {
        if(props.target) {
            setTarget(props.target);
        }
    },[props.target]);

  return (
    <div className="research__tab">
        {target !== null ? <div>
            <h3>Nom : {target.name}</h3>
            <p>Description : {target.description}</p>
            <p>Coût : {target.cost}$</p></div>
         : <h3>No target</h3>}
    </div>
  )
}

export default Tooltip