import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import styles from "./UserDashboard.css";

function UserDashboard() {
  const Navigate = useNavigate();
  const showhistory = () => {
    Navigate("/ShowHistory");
  };
  const showdesign = () => {
    Navigate("/ShowDesign");
  };
  const showreview = () => {
    Navigate("/ShowReview");
  };
  const showresource = () => {
    Navigate("/ShowResource");
  };

  const logOut = () => {
    Navigate("/");
  };

  return (
    <div className="auth-inner2">
      Hello User!
      <button className="btn btn-primary" onClick={showhistory}>
        History
      </button>
      <button className="btn btn-primary" onClick={showdesign}>
        Curriculum Design
      </button>
      <button className="btn btn-primary" onClick={showreview}>
        Curriculum Review
      </button>
      <button className="btn btn-primary" onClick={showresource}>
        Resource Repository
      </button>
      <button onClick={logOut} className="btn btn-primary">
        Log Out
      </button>
    </div>
  );
}

export default UserDashboard;
