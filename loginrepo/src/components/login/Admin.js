import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";
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
  const toUser = async (e) => {
    Navigate("/User");
  };

  return (
    // <form onSubmit={loginAdmin}>
    //   <h1>Hello Admin!</h1>
    //   <div className="mb-3">
    //     <label>Admin Name:-</label>
    //     <input
    // type="text"
    // name="name"
    // value={user.name}
    // onChange={handleChange}
    // className="form-control"
    // placeholder="Admin Name"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label>Password:-</label>
    //     <input
    // type="password"
    // name="password"
    // className="form-control"
    // value={user.password}
    // onChange={handleChange}
    // placeholder="Enter your Password"
    //     />
    //   </div>
    //   <div className="d-grid">
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </div>

    // </form>
    <>
      <div class="wrapper fadeInDown">
        <div id="formContent">
          <img
            class="fadeIn second"
            src="https://theacademicinsights.com/wp-content/uploads/2020/10/AICTE-logo.jpeg"
            alt=""
            width="335"
            height="189"
          ></img>
          <br />
          <h2 class="inactive underlineHover" onClick={toUser}>
            {" "}
            User{" "}
          </h2>
          <h2 class="active">Admin </h2>

          <form onSubmit={loginAdmin}>
            <input
              id="login"
              class="fadeIn second"
              name="login"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Admin Name"
            />
            <input
              id="password"
              class="fadeIn third"
              name="login"
              type="password"
              name="password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            />
            <input type="submit" class="fadeIn fourth" value="Log In" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Admin;
