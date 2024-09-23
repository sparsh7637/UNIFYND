import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Fee from "./components/Fee";
import SignIn from "./components/auth/Login";
import SignUp from "./components/auth/Signup";
import ResetPassword from "./components/auth/ResetPassword";
import VerifyEmail from "./components/auth/VerifyEmail";
import Home from "./components/Home";
import CollegeInfo from "./components/CollegeInfo";
import logo from "./components/images/uf2.png";
import MyColleges from "./components/MyColleges";
import BlogsPage from "./components/Blogs";
import "./index.css";
import { useAuth } from "./services/AuthProvider";
import Profile from "./components/Profile";
import MetaTags from "./components/MetaTags";
import { HelmetProvider } from "react-helmet-async";
import NoteComponent from "./components/NoteComponent";
import GradientBackground from "./components/GradientBackground";
import AuthRedirect from "./components/auth/AuthRedirect";
import CollegeInfo2 from "./components/CollegeInfo2";
import USA from "./components/countries/usa";
import UK from "./components/countries/uk";
import Canada from "./components/countries/canada";
import ForgotPassword from "./components/auth/ForgotPassword";
import Australia from "./components/countries/aus";
import Germany from "./components/countries/germany";
import CGPAToPercentageCalculator from "./components/cg2percentage";
import PercentageToCGPACalculator from "./components/percentage2cgpa";
import NewZealand from "./components/countries/newzealand";

const AuthLinks = () => {
  const { user } = useAuth();

  return user ? null : (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/SignUp">
          Sign Up
        </Link>
      </li>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <MetaTags />
        <GradientBackground />
        <nav
          style={{
            position: "fixed",
            zIndex: "1050",
            top: "0",
            height: "60px",
            borderRadius: "0",
            border: "none",
          }}
          className="navbar navbar-expand-lg navbar-dark bg-dark"
        >
          <div className="container-fluid" style={{ height: "auto" }}>
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src={logo} alt="Logo" style={{ height: "80px" }} />
              <span className="ms-2" style={{ marginRight: "70px" }}>
                UNIFYND
              </span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ height: "auto" }}
            >
              <ul
                className="navbar-nav me-auto"
                style={{ height: "auto", margin: "0" }}
              >
                <li className="nav-item">
                  <a className="nav-link" href="/Blogs">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/fee">
                    Fee Estimator
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cgpa2percentage">
                    cgto%
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/percentage2cgpa">
                    %tocg
                  </Link>
                </li>
                <AuthLinks />
              </ul>
            </div>
          </div>
        </nav>

        <div
          className="givemargin"
          style={{
            position: "absolute",
            zIndex: "2",
            top: "10%",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fee" element={<Fee />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/verify-email" element={<VerifyEmail />} />
            <Route path="/my-colleges" element={<MyColleges />} />
            <Route path="/note-component" element={<NoteComponent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/usa" element={<USA />} />
            <Route path="/uk" element={<UK />} />
            <Route path="/canada" element={<Canada />} />
            <Route path="/australia" element={<Australia />} />
            <Route path="/germany" element={<Germany />} />
            <Route path="/newzealand" element={<NewZealand />} />
            <Route path="/auth-redirect" element={<AuthRedirect />} />
            <Route
              path="/cgpa2percentage"
              element={<CGPAToPercentageCalculator />}
            />
            <Route
              path="/percentage2cgpa"
              element={<PercentageToCGPACalculator />}
            />
            <Route
              path="/Blogs"
              element={
                <>
                  <MetaTags
                    title="Scholarships for Indian Students | UNIFYND"
                    description="Explore scholarships available for Indian students studying abroad. Get the latest information on financial aid and scholarships for international students."
                  />
                  <BlogsPage />
                </>
              }
            />
            <Route
              path="/college-info/:schoolName"
              element={
                <>
                  <MetaTags
                    title="College Info | UNIFYND"
                    description="Find detailed information about colleges and universities."
                  />
                  <CollegeInfo />
                </>
              }
            />
            <Route
              path="/uk-college-info/:collegeTag"
              element={
                <>
                  <MetaTags
                    title="UK College Info | UNIFYND"
                    description="Find detailed information about UK colleges and universities."
                  />
                  <CollegeInfo2 />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
