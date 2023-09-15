import { Fragment } from 'react';
import NavBar from './components/login/NavBar';
import User from './components/login/User';
import Admin from './components/login/Admin';
import AdminDashboard from './components/dashboard/AdminDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import UserRegister from './components/dashboard/UserRegister';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import './style.css';

const App = () => {
  return (

    <div className="App">
      <Router>
        <Fragment>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<NavBar />} />
                <Route exact path="/Admin" element={<Admin />} />
                <Route exact path="/User" element={<User />} />
                <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
                <Route exact path="/UserDashboard" element={<UserDashboard />} />
                <Route exact path="/UserRegister" element={<UserRegister />} />
              </Routes>
            </div>
          </div>
        </Fragment>
      </Router>
    </div>

  );
}

export default App;

