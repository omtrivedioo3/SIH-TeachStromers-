import React, { useState } from "react";
import { useNavigate,Navigate } from 'react-router-dom';

function UserRegister() {

   const Navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password:"",
    department:"",
    subject:"",
    p_assignment:"",
    p_review:""


  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const registerUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/user/UserRegister", {
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

  const backbutton=()=>{
    Navigate("/AdminDashboard");
  }
    return (
        <form onSubmit={registerUser}>
        
        <div className="d-grid">
        <button onClick={backbutton} type="back" className="btn btn-primary">
          Back
        </button>
      </div>


      <div className="mb-3">
        <label> Name:-</label>
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
        <label>Email:-</label>
        <input
          type="email"
          name="email"
          className="form-control"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Password"
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
      <div className="mb-3">
        <label>Department-</label>
        <input
          type="text"
          name="department"
          className="form-control"
          value={user.department}
          onChange={handleChange}
          placeholder="Enter your Department"
        />
      </div>
      <div className="mb-3">
        <label>Subject:-</label>
        <input
          type="text"
          name="subject"
          className="form-control"
          value={user.subject}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
      </div>
     
      <div className="mb-3">
        <label>Project assignment:-</label>
        <input
          type="text"
          name="p_assignment"
          className="form-control"
          value={user.p_assignment}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
      </div>
       <div className="mb-3">
        <label>Project review:-</label>
        <input
          type="text"
          name="p_review"
          className="form-control"
          value={user.p_review}
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
    )
}

export default UserRegister
