// import React from 'react'
import "/Style.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navdiv">
          <div className="logo">
            <a href="#">Dribbble</a>
          </div>
          <ul>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">Hire a Designer</a>
            </li>
            <li>
              <a href="#">Find Jobs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
          <div className="auth-buttons">
            <div className="SignUpButton">
              <h4>Sign Up</h4>
            </div>
            <div className="LoginButton">
              <h4>Login</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
