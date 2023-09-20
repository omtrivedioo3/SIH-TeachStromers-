import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function AdminDashboard() {
  const [status, setStatus] = useState("");
  const Navigate = useNavigate();

  const getStatus = async (e) => {
    // e.preventDefault();
    const res = await fetch("http://localhost:5000/admin/Admin/getStatus", {
      method: "GET",
      // body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const status = await res.json();
    setStatus(status.data);
    console.log(status, "AdminStatus");
  };

  useEffect(() => {
    //getAllUserdata();
    getStatus();
  }, []);
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./";
  };
  const adduser = () => {
    window.location.href = "./UserRegister";
  };

  const showusers = () => {
    window.location.href = "./AllUsers";
  };

  const PAassign = () => {
    window.location.href = "./AssignWork";
  };
  return (
    <div>
      <div style={{ width: "auto" }}>
        <table style={{ width: 500 }}>
          <tr>
            <th>p_id</th>
            <th>subject</th>
            <th>PA_name</th>
            <th>PR_name</th>
            <th>PA_status</th>
            <th>PR_status</th>
            <th>PA_data</th>
            <th>PR_data</th>
            <th>admin_status</th>
          </tr>
          {status &&
            status.map((i) => {
              return (
                <tr>
                  <td>{i.p_id}</td>
                  <td>{i.subject}</td>
                  <td>{i.PA_name}</td>
                  <td>{i.PR_name}</td>
                  <td>{i.PA_status ? `Done` : `Pending`}</td>
                  <td> {i.PR_status ? `Done` : `Pending`}</td>
                  <td>{i.PA_data}</td>
                  <td>{i.PR_data}</td>
                  <td> {i.admin_status ? `Done` : `Pending`}</td>
                </tr>
              );
            })}
        </table>
        <button onClick={adduser} className="btn btn-primary">
          Add User
        </button>

        <button onClick={showusers} className="btn btn-primary">
          Show All Users
        </button>

        <button onClick={PAassign} className="btn btn-primary">
          Project Assign
        </button>
        <button onClick={logOut} className="btn btn-primary">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
