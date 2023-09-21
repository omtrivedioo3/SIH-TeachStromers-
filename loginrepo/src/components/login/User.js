import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import UserDashboard from "../dashboard/UserDashboard";
import "./User.css";
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
    console.log(data1.success);
    if (data1.success) {
      Navigate("/UserDashboard");
    }
  };
  const toAdmin = async (e) => {
    Navigate("/Admin");
  };

  return (
    // <form onSubmit={loginUser}>
    //   <h1>Hello User!</h1>
    //   <div className="mb-3">
    //     <label>Useremail:-</label>
    //     <input
    //       type="text"
    //       name="email"
    //       value={user.email}
    //       onChange={handleChange}
    //       className="form-control"
    //       placeholder="Useremail"
    //     />
    //   </div>

    //   <div className="mb-3">
    //     <label>Password:-</label>
    //     <input
    //       type="password"
    //       name="password"
    //       className="form-control"
    //       value={user.password}
    //       onChange={handleChange}
    //       placeholder="Enter your Password"
    //     />
    //   </div>
    //   <div className="d-grid">
    //     <button type="submit" className="btn btn-primary">
    //       Submit
    //     </button>
    //   </div>
    // </form>

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
        <h2 class="active"> User </h2>
        <h2 class="inactive underlineHover" onClick={toAdmin}>
          Admin{" "}
        </h2>

        <form onSubmit={loginUser}>
          <input
            type="text"
            id="login"
            class="fadeIn second"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Useremail"
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
  );
};
export default User;
