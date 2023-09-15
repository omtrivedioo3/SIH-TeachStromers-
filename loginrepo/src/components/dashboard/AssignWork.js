import React, { useState } from 'react'
import { useNavigate,Navigate } from 'react-router-dom'

function AssignWork () {
    const Navigate=useNavigate();
    const [assign, setassign] = useState({
        p_id:"",
        subject:"",
        PA_name:"",
        PR_name:""

    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setassign({
          ...assign,
          [name]: value,
        });
      };

      const assignuser = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/user/UserRegister", {
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
       const backbutton=()=>{
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
          name="name"
          value={assign.p_id}
          onChange={handleChange}
          className="form-control"
          placeholder="Project ID"
        />
      </div>

      <div className="mb-3">
        <label> Subject:-</label>
        <input
          type="text"
          name="name"
          value={assign.subject}
          onChange={handleChange}
          className="form-control"
          placeholder="Subject"
        />
      </div>

      <div className="mb-3">
        <label> Project-Assingment_Name:-</label>
        <input
          type="text"
          name="name"
          value={assign.PA_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Project-Assingment_Name"
        />
      </div>

      <div className="mb-3">
        <label> Project-Review_Name:-</label>
        <input
          type="text"
          name="name"
          value={assign.PR_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Project-Review_Name"
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
