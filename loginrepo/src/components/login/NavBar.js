import React, { useState } from "react";
import { Link } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";
import { useNavigate } from "react-router-dom";
// import "./NavBar.css";

const NavBar = ({ user }) => {
  const Navigate = useNavigate();
  return (
    <div>
      <Link to="/Admin">
        <button
          onClick={() => {
            Navigate("/Admin");
          }}
        >
          Login As Admin
        </button>
      </Link>

      <Link to="/User">
        <button
          onClick={() => {
            Navigate("/User");
          }}
        >
          Login As User
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
