import React, { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

function ShowResource() {
  const [resoursces, setResources] = useState("");
  const Navigate = useNavigate();

  const getResources = async (e) => {
    // e.preventDefault();
    const res = await fetch(
      "http://localhost:5000/resource/getAllResourceRepository",
      {
        method: "GET",
        // body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }
    );
    const resources = await res.json();
    setResources(resources.data);
    console.log(resources, "resource data");
  };

  useEffect(() => {
    getResources();
  }, []);

  const backbutton = () => {
    Navigate("/UserDashboard");
  };
  return (
    <div>
      <table style={{ width: 500 }}>
        <tr>
          <th>ID</th>
          <th>Subject</th>
          <th>Name</th>
          <th>Link</th>
        </tr>
        {resoursces &&
          resoursces.map((i) => {
            return (
              <tr>
                <td>{i.r_id}</td>
                <td>{i.subject}</td>
                <td>{i.r_name}</td>
                <td>
                  <a href={i.r_data} target="_blank">
                    View
                  </a>
                </td>
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
  );
}

export default ShowResource;
