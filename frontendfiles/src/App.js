import { Fragment} from 'react';
import NavBar from './components/NavBar';
import User from './components/User';
import Admin from './components/Admin';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css';
import './style.css';
// import HomePage from './components/HomePage';

const App=()=> {
  return (
    
    <div className="App">
     <Router>
      <NavBar/>
      <Fragment>
      <div className="auth-wrapper">
       <div className="auth-inner">
        <Routes>
           <Route exact path="/Admin" element={<Admin/>}/>
           <Route exact path="/User" element={<User/>}/> 
        </Routes> 
        </div>
      </div>
      </Fragment>
      </Router>
    </div>
  
  );
}

export default App;

{/* <Routes>
        
        <Route exact path="/Admin" element={<Admin/>}/>
        <Route exact path="/User" element={<User/>}/> 
        </Routes>  */}