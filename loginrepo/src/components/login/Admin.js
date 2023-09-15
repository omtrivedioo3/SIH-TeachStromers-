import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminDashboard from "../dashboard/AdminDashboard";

const Admin = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const loginAdmin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/admin/Admin", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();

    alert(data1.message);
    if (data1.success) {
      Navigate("/AdminDashboard");
    }
  };


  return (
    <form onSubmit={loginAdmin}>
      <h1>Hello Admin!</h1>
      <div className="mb-3">
        <label>Admin Name:-</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Admin Name"
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
export default Admin;