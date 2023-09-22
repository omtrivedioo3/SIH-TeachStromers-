import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

function ShowDesign() {
  const Navigate = useNavigate();
  const backbutton = () => {
    Navigate("/UserDashboard");
  };

  return (
    <div className="auth-inner2">
      <h3> THIS IS CURRICULUM-DESIGN </h3>
      <div className="d-grid">
        <button onClick={backbutton} type="back" className="btn btn-primary">
          Back
        </button>
      </div>
    </div>
  );
}

export default ShowDesign;
