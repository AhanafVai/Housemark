import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Explore from "./Pages/Explore";
import ForgetPassword from "./Pages/ForgetPassword";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Explore />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/offer" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
