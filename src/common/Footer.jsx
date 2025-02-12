

// import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-dark py-4">
      <div className="container">
        {/* Top Section */}
        <div className="row mb-4">
          <div className="col-md-6">
            <h4 className="fw-bold">Dribbble</h4>
          </div>
          <div className="col-md-6 d-flex flex-wrap justify-content-md-end gap-3">
            <Link to="#" className="text-dark text-decoration-none">For designers</Link>
            <Link to="#" className="text-dark text-decoration-none">Hire talent</Link>
            <Link to="#" className="text-dark text-decoration-none">Inspiration</Link>
            <Link to="#" className="text-dark text-decoration-none">Advertising</Link>
            <Link to="#" className="text-dark text-decoration-none">Blog</Link>
            <Link to="#" className="text-dark text-decoration-none">About</Link>
            <Link to="#" className="text-dark text-decoration-none">Careers</Link>
            <Link to="#" className="text-dark text-decoration-none">Support</Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="row border-top pt-3">
          {/* Extra Links */}
          <div className="col-md-4">
            <h6 className="text-muted">Explore</h6>
            <div className="d-flex flex-wrap gap-2">
              <Link to="#" className="text-dark text-decoration-none">Jobs</Link>
              <Link to="#" className="text-dark text-decoration-none">Designers</Link>
              <Link to="#" className="text-dark text-decoration-none">Freelancers</Link>
              <Link to="#" className="text-dark text-decoration-none">Tags</Link>
              <Link to="#" className="text-dark text-decoration-none">Places</Link>
              <Link to="#" className="text-dark text-decoration-none">Resources</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="col-md-4 text-center">
            <h6 className="text-muted">Legal</h6>
            <div className="d-flex flex-column">
              <Link to="#" className="text-dark text-decoration-none">© 2025 Dribbble</Link>
              <Link to="#" className="text-dark text-decoration-none">Terms</Link>
              <Link to="#" className="text-dark text-decoration-none">Privacy</Link>
              <Link to="#" className="text-dark text-decoration-none">Cookies</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-md-4 text-md-end text-center">
            <h6 className="text-muted">Follow Us</h6>
            <div className="d-flex justify-content-md-end justify-content-center gap-3">
              <Link to="#" className="text-dark fs-4">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="text-dark fs-4">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="#" className="text-dark fs-4">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" className="text-dark fs-4">
                <i className="fab fa-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
