// import React from 'react'
import "/Style.css";
// import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container text-center">
          <br />
          
          <h1>
            Discover the world’s
            <br /> top designers
          </h1>
          
          <h6>
            Explore work from the most talented and accomplished designers
            <br />
            ready to take on your next project
          </h6>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="What are u looking for?" />
          <button>Search</button>
        </div>
        
        <ul>
          <li>
            <a href="#">Trending searches</a>
          </li>
          <li>
            <a href="#">landing page</a>
          </li>
          <li>
            <a href="#">e-commerce</a>
          </li>
          <li>
            <a href="#">mobile app</a>
            <a href="#">logo design</a>
            <a href="#"> dashboard</a>
            <a href="#">icons</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Banner;
