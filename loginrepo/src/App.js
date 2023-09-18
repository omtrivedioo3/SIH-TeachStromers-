import { Fragment, useState } from "react";
import NavBar from "./components/login/NavBar";
import User from "./components/login/User";
import Admin from "./components/login/Admin";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import UserDashboard from "./components/dashboard/UserDashboard";
import UserRegister from "./components/dashboard/UserRegister";
import AllUsers from "./components/dashboard/AllUsers";
import AssignWork from "./components/dashboard/AssignWork";
import ShowDesign from "./components/dashboard/ShowDesign";
import ShowHistory from "./components/dashboard/ShowHistory";
import ShowResource from "./components/dashboard/ShowResource";
import ShowReview from "./components/dashboard/ShowReview";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./style.css";

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
                <Route
                  exact
                  path="/AdminDashboard"
                  element={<AdminDashboard />}
                />
                <Route
                  exact
                  path="/UserDashboard"
                  element={<UserDashboard />}
                />
                <Route exact path="/UserRegister" element={<UserRegister />} />
                <Route exact path="/AllUsers" element={<AllUsers />} />
                <Route exact path="/AssignWork" element={<AssignWork />} />
                <Route exact path="/ShowDesign" element={<ShowDesign />} />
                <Route exact path="/ShowHistory" element={<ShowHistory />} />
                <Route exact path="/ShowResource" element={<ShowResource />} />
                <Route exact path="/ShowReview" element={<ShowReview />} />
              </Routes>
            </div>
          </div>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;
