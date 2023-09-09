import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const NavBar =(props)=> {
 
    return (
      <div>
          
         
          <Link to="/Admin">
          <button>Login As Admin</button>
        </Link>
         
         
      
        <Link to="/User">
          <button>Login As User</button>
        </Link>
       
       
       
        
             
      </div>
    )
  
}

export default NavBar
