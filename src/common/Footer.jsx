// import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container top-section">
          <div className="logo-nav">
            <span className="logoo">Dribbble</span>
            <nav className="nav-links">
              <a href="#">For designers</a>
              <a href="#">Hire talent</a>
              <a href="#">Inspiration</a>
              <a href="#">Advertising</a>
              <a href="#">Blog</a>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Support</a>
            </nav>
          </div>
        </div>

        <div className="container bottom-section">
          <div className="extra-links">
            <a href="#">Jobs</a>
            <a href="#">Designers</a>
            <a href="#">Freelancers</a>
            <a href="#">Tags</a>
            <a href="#">Places</a>
            <a href="#">Resources</a>
          </div>
          <div className="legal-links">
            <a href="#">© 2025 Dribbble</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
          </div>
          <div className="social-links">
            <a href="#">
              <i className="fab fa-twitter"></i>{" "}
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>{" "}
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>{" "}
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
