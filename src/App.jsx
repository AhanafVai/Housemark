import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import CreateListing from "./Pages/CreateListing";
import EditListing from "./Pages/EditListing";
import Explore from "./Pages/Explore";
import ForgetPassword from "./Pages/ForgetPassword";
import Listing from "./Pages/Listing";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/Signin";
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
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/edit-listing/:listingId" element={<EditListing />} />
          <Route path="/offer" element={<Offers />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route
            path="/category/:categoryName/:listingId"
            element={<Listing />}
          />
          <Route path="/contact/:landlordId" element={<Contact />} />
        </Routes>
        <Navbar />
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
