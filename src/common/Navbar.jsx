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
            <div className="signup-button">
              <button>Sign Up</button>
              </div>
            <div className="login-button">
              <button>
                <a href="#">Login</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
