
// import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section id="hero" className="d-flex align-items-center py-5 bg-white">
      <div className="container text-center">
        <br />
        <h1 className="display-4 fw-bold">
          Discover the worlds <br /> top designers
        </h1>
        <p className="lead text-muted">
          Explore work from the most talented and accomplished designers <br />
          ready to take on your next project.
        </p>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mt-4">
          <div className="input-group w-50">
            <input
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
            />
            <button className="btn btn fw-bold bg-danger text-white">Search</button>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="mt-4">
          <h5 className="text-muted">Trending searches:</h5>
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="#" className=" btn  text-decoration-none">Landing Page</Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className=" btn  text-decoration-none">E-commerce</Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className=" btn text-decoration-none">Mobile App</Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn text-decoration-none">Logo Design</Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn text-decoration-none">Dashboard</Link>
            </li>
            <li className="list-inline-item">
              <Link to="#" className="btn text-decoration-none">Icons</Link>
            </li>
          </ul>
          <div className="button">
          <div className="text-muted">Trending searches:</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
