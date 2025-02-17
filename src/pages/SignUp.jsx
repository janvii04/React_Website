// import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container-fluid vh-100 d-flex">
    <div className="d-none d-md-flex col-md-4 bg-dark text-white align-items-center justify-content-center position-relative">
      {/* Text Overlay */}
      <h1
        className="position-absolute top-0 start-0 m-3 fst-italic"
        style={{ fontFamily: "cursive", cursor: "pointer" }}
        onClick={() => (window.location.href = "/")}
      >
        Dribbble
      </h1>

      {/* Background Image */}
      <img
        src="img17.gif"
        alt="Background"
        className="img-fluid vh-100 w-100"
        style={{ objectFit: "cover" }}
      />
    </div>

        {/* Right Side - Login Form */}
        <div className="col-md-7 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="mb-4 text-center">Sign up to Dribbble</h2>

            {/* Google Sign-In */}
            <button className="btn btn-dark w-100 mb-3 border custom-input">
              <i className="fab fa-google me-2"></i> Sign up with Google
            </button>

            <p className="text-center text-muted">or </p>

            <button className="btn btn-light w-100 mb-3 border custom-input">
              <i className="fab fa-google me-2"></i> Continue with email
            </button>

            <p className="mt-3 text-center">
              By creating an account you agree with our{" "}
              <Link to="/Signup">
                {" "}
                Terms of Service, Privacy Policy, and our default Notification
                Settings.
              </Link>
            </p>

            <p className="mt-3 text-center">
              Dont have an account? <Link to="/SignIn">Sign In</Link>
            </p>
          </div>
        </div>

        {/* Custom CSS for Input Fields */}
        <style>
          {`
          .custom-input {
            border-radius: 20px !important;
            padding: 10px 15px;
          }
        `}
        </style>
      </div>
    // </div>
  );
};

export default SignUp;
