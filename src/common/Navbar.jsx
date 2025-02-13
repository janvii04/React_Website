// // // import React from 'react'


// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white">
//       <div className="container">
//         {/* Logo */}
//         <Link className="navbar-brand fw-bold" to="#">
//           Dribbble
//         </Link>

//         {/* Toggle Button for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navbar Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item">
//               <Link className="nav-link " to="#">
//                 Explore
//               </Link>


//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 Hire a Designer
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 Find Jobs
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="#">
//                 Blog
//               </Link>
//             </li>
//           </ul>

//           {/* Auth Buttons */}
//           <div className="d-flex gap-2">
//             <Link to="/SignUp" className="btn btn fw-bold">
//               Sign Up
//             </Link>
//             <Link to="/Login" className="btn btn text-white bg-dark">
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUsers, FaFileAlt, FaBriefcase, FaHandshake } from "react-icons/fa";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Logo */}
          <Link
            className="navbar-brand dribbble-text fw-bold fst-italic"
            to="/"
          >
            Dribbble
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto align-items-center">
              {/* Explore Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter("explore")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-link dropdown-toggle text-black"
                  id="exploreDropdown"
                  aria-expanded={openDropdown === "explore"}
                >
                  Explore
                </button>
                <ul
                  className={`dropdown-menu ${
                    openDropdown === "explore" ? "show" : ""
                  }`}
                  aria-labelledby="exploreDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/product-design">
                      <i className="fas fa-star me-2 text-black"></i> Popular
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/product-design">
                      <i className="fas fa-fire me-2 text-danger text-black"></i>
                      New and Noteworthy
                    </Link>
                  </li>
                  <hr />
                  <li>
                    <Link className="dropdown-item" to="/product-design">
                      Product Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/web-design">
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/animation">
                      Animation
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/animation">
                      Branding
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" to="/animation">
                      Illustration
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" to="/animation">
                      Mobile
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" to="/animation">
                      Typography
                    </Link>
                  </li>{" "}
                  <li>
                    <Link className="dropdown-item" to="/animation">
                      Print
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Hire a Designer Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => handleMouseEnter("hire")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="nav-link dropdown-toggle text-black"
                  id="hireDropdown"
                  aria-expanded={openDropdown === "hire"}
                >
                  Hire a Designer
                </button>
                <ul
                  className={`dropdown-menu ${
                    openDropdown === "hire" ? "show" : ""
                  }`}
                  aria-labelledby="hireDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/browse-designers">
                      <FaUsers className="me-2 text-primary text-black" />{" "}
                      Browse Designers
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/submit-brief">
                      <FaFileAlt className="me-2 text-info text-black" /> Submit
                      a Project Brief
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/post-job">
                      <FaBriefcase className="me-2 text-success text-black" />{" "}
                      Post a Job
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/hiring">
                      <FaHandshake className="me-2 text-warning text-black" />{" "}
                      Hiring on Dribbble
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Find Jobs */}
              <li className="nav-item">
                <Link className="nav-link text-black" to="/find-jobs">
                  Find Jobs
                </Link>
              </li>

              {/* Blog */}
              <li className="nav-item">
                <Link className="nav-link text-black" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>

            {/* Auth Buttons */}
            <div className="d-flex gap-2">
              <Link to="/signup" className="btn fw-bold">
                Sign Up
              </Link>
              <Link to="/login" className="btn text-white bg-dark">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Styles */}
      <style>
        {`
        .dribbble-text {
  font-family: "Pacifico", cursive !important;  / Cursive font /
  font-size: 30px !important;  / Adjust text size /
  color: #05000d !important; / Dark color /
  text-decoration: none !important;
}

.dribbble-text:hover {
  color: #ea4c89 !important; / Dribbble pink on hover /
  transition: color 0.3s ease-in-out;
}

          .dropdown-menu {
            display: none;
            position: absolute;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          .dropdown-menu.show {
            display: block;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;

