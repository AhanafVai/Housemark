import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  default as Explore,
  default as ForgetPassword,
  default as Offers,
  default as Profile,
  default as Signin,
  default as SignUp,
} from "./Pages/Explore";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Offers />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
      <Navbar />
    </Router>
  );
};

export default App;
