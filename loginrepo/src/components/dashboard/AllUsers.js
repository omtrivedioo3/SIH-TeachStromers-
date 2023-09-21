import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import "./AllUsers.css";

function AllUsers() {
  const [users, setUsers] = useState("");
  const Navigate = useNavigate();

  const getAllUserdata = async (e) => {
    // e.preventDefault();
    const res = await fetch("http://localhost:5000/user/getAllUser", {
      method: "GET",
      // body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const users = await res.json();
    setUsers(users.data);
    console.log(users, "USer data");
  };
  const backbutton = () => {
    Navigate("/AdminDashboard");
  };
  useEffect(() => {
    getAllUserdata();
  }, []);

  return (
    <div>
      <div style={{ width: "auto" }}>
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>University</th>
              <th>Department</th>
            </tr>
          </thead>
          {users &&
            users.map((i) => {
              return (
                <tr>
                  <td>{i.userid}</td>
                  <td>
                    <div class="d-flex align-items-center">
                      <img
                        src="https://i.postimg.cc/NMcbhxc8/hg7.jpg"
                        alt=""
                        class="rounded-circle"
                      />
                      <div class="ms-3">
                        <p class="fw-bold mb-1">{i.name}</p>
                        <p class="text-muted mb-0">{i.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">{i.university}</p>
                    <p class="text-muted mb-0">{i.institute}</p>
                  </td>
                  <td>
                    <p class="fw-normal mb-1">{i.department}</p>
                    <p class="text-muted mb-0">{i.subject}</p>
                  </td>
                </tr>
              );
            })}
        </table>
        {/* <table style={{ width: 500 }}>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Department</th>
            <th>Subject</th>
          </tr>
          {users &&
            users.map((i) => {
              return (
                <tr>
                  <td>{i.name}</td>
                  <td>{i.email}</td>
                  <td>{i.password}</td>
                  <td>{i.department}</td>
                  <td>{i.subject}</td>
                </tr>
              );
            })}
        </table> */}
        <div className="d-grid">
          <button onClick={backbutton} type="back" className="btn btn-primary">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
