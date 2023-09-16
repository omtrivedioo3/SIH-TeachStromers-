import React, {  } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';


function ShowHistory () {
  const Navigate = useNavigate();
  const backbutton = () => {
    Navigate("/UserDashboard");
  }
    return (
      <div>
        THIS IS HISTORY
        <div className="d-grid">
        <button onClick={backbutton} type="back" className="btn btn-primary">
          Back
        </button>
      </div>
      </div>
    )
  
}

export default ShowHistory
