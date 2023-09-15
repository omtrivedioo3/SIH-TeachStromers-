import React, { useEffect, useState } from 'react'

function AdminDashboard() {
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");

  const getStatus = async (e) => {
    // e.preventDefault();
    const res = await fetch("http://localhost:5000/admin/Admin/getStatus", {
      method: "GET",
      // body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setStatus(data.data);
    console.log(data, "AdminStatus")
  };
  const getAllUserdata = async (e) => {
    // e.preventDefault();
    const res = await fetch("http://localhost:5000/user/getAllUser", {
      method: "GET",
      // body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setData(data.data);
    console.log(data, "USer data")
  };
  useEffect(() => {
    getAllUserdata();
    getStatus();

  }, []);
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = './Admin';

  };
  const adduser = () => {
    window.location.href = './UserRegister'

  }
  return (
    <div >
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
          {data && data.map((i) => {
            return (
              <tr>
                <td>{i.p_id}</td>
                <td>{i.p_id}</td>
                <td>{i.p_id}</td>
                <td>{i.p_id}</td>
                <td>{i.p_id}</td>
                <td>{i.p_id}</td>
                <td>{i.p_id}</td>
              </tr>
            )
          })}
        </table>
        <button onClick={adduser} className='btn btn-primary'>
          Add User
        </button>

        <button onClick={logOut} className='btn btn-primary'>
          Log Out</button>
      </div>
    </div>
  )
}

export default AdminDashboard
