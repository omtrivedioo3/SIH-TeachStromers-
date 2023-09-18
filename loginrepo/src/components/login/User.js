import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDashboard from "../dashboard/UserDashboard";
const User = () => {
  
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/user/User", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();
    alert(data1.message);
    console.log(data1.success)
    if (data1.success) {
      Navigate("/UserDashboard");
    }
  };

  return (
    <form onSubmit={loginUser}>
      <h1>Hello User!</h1>
      <div className="mb-3">
        <label>Useremail:-</label>
        <input type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          className="form-control"
          placeholder="Useremail"
        />
      </div>

      <div className="mb-3">
        <label>Password:-</label>
        <input
          type="password"
          name="password"
          className="form-control"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>

    </form>
  );

}
export default User;
