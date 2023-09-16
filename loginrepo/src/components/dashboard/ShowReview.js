import React, { } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';


function ShowReview() {
  const Navigate = useNavigate();
  const backbutton = () => {
    Navigate("/UserDashboard");
  }

  return (
    <div>
      <h3>THIS IS CURRICULUM-REVIEW </h3>
      <div className="d-grid">
        <button onClick={backbutton} type="back" className="btn btn-primary">
          Back
        </button>
      </div>
    </div>
  )

}

export default ShowReview
