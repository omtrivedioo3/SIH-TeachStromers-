

import React, {  } from "react";


const User=()=> {


 
    return (
        <form>
        <h1>Hello User!</h1>
        <div className="mb-3">
          <label>UserName:-</label>
          <input type="text"
            className="form-control"
            placeholder="UserName"
          />
        </div>
      
        <div className="mb-3">
          <label>Password:-</label>
          <input
            type="password"
            className="form-control"
           placeholder="PassWord"
          />
        </div>
        <div className="d-grid">
          <button type="submit"  className="btn btn-primary">
           Submit
          </button>
        </div>
       
      </form>
    );
  
}
export default User;
