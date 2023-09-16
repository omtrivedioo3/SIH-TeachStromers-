import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from 'react-router-dom';


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
  }
  useEffect(() => {
    getAllUserdata();
  }, []);

  return (
    <div>
      <div style={{ width: "auto" }}>
        <table style={{ width: 500 }}>
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
        </table>
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
