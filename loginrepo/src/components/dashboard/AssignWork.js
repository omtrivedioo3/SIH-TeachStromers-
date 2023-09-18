import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function AssignWork() {
  const Navigate = useNavigate();
  const [assign, setAssign] = useState({
    p_id: "",
    subject: "",
    PA_name: "",
    PR_name: ""

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssign({
      ...assign,
      [name]: value,
    });
  };

  const assignuser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/admin/Admin/AdminDashboard", {
      method: "POST",
      body: JSON.stringify(assign),
      headers: { "Content-Type": "application/json" },
    });
    const data1 = await res.json();

    alert(data1.message);
    if (data1.success) {
      Navigate("/AdminDashboard");
    }
  };
  const backbutton = () => {
    Navigate("/AdminDashboard");
  }

  return (
    <form onSubmit={assignuser}>

      <div className="d-grid">
        <button onClick={backbutton} type="back" className="btn btn-primary">
          Back
        </button>
      </div>

      <div className="mb-3">
        <label> Project_id:-</label>
        <input
          type="text"
          name="p_id"
          value={assign.p_id}
          onChange={handleChange}
          className="form-control"
          placeholder="Project id"
        />
      </div>

      <div className="mb-3">
        <label> Subject:-</label>
        <input
          type="text"
          name="subject"
          value={assign.subject}
          onChange={handleChange}
          className="form-control"
          placeholder="Subject"
        />
      </div>

      <div className="mb-3">
        <label> Project Assign:-</label>
        <input
          type="text"
          name="PA_name"
          value={assign.PA_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Project Assign"
        />
      </div>

      <div className="mb-3">
        <label> Project Review:-</label>
        <input
          type="text"
          name="PR_name"
          value={assign.PR_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Project Review"
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

export default AssignWork