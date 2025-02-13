// import React from 'react'
import { useState, useEffect,useRef } from "react";

import Navbar from "../../common/Navbar";
import Banner from "../../common/Banner";
import Footer from "../../common/Footer";
import Card from "../../components/cards/Card";
import { Link } from "react-router-dom";

const categories = [
  
    { name: "Print", image: "/img1.webp" },
    { name: "Typography", image: "/img2.webp" },
    { name: "Product Design", image: "/img3.webp" },
    { name: "Typography", image: "/img2.webp" },


  ]
 
const getInfiniteItems =(arr)=> [...arr,...arr];


const Dashboard = () => {
  const [showFilters, setShowFilters] = useState({});


  const [pause, setPause] = useState(false);
  const [manualControl, setManualControl] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (trackRef.current) {
      if (pause || manualControl) {
        trackRef.current.style.animationPlayState = "paused";
      } else {
        trackRef.current.style.animationPlayState = "running";
      }
    }
  }, [pause, manualControl]);

  const scrollLeft = () => {
    if (trackRef.current) {
      setManualControl(true);
      trackRef.current.scrollLeft -= 250;
      setTimeout(() => setManualControl(false), 5000);
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      setManualControl(true);
      trackRef.current.scrollLeft += 250;
      setTimeout(() => setManualControl(false), 5000);
    }
  };

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="d-flex align-items-center justify-content-between p-2">
        <div>
          <select className="form-select d-inline w-auto">
            <option selected>Popular</option>
            <option>New Noteworthy</option>
            <option>Trending</option>
          </select>
        </div>
        <nav className="nav">
          <Link
            className="btn btn-light text-black border-black px-3"
            to="/discover"
          >
            Discover
          </Link>
          <Link className="nav-link text-black" to="/animation">
            Animation
          </Link>
          <Link className="nav-link text-black" to="/branding">
            Branding
          </Link>
          <Link className="nav-link text-black" to="/illustration">
            Illustration
          </Link>
          <Link className="nav-link text-black" to="/mobile">
            Mobile
          </Link>
          <Link className="nav-link text-black" to="/print">
            Print
          </Link>
          <Link className="nav-link text-black" to="/product-design">
            Product Design
          </Link>
          <Link className="nav-link text-black" to="/typography">
            Typography
          </Link>
          <Link className="nav-link text-black" to="/web-design">
            Web Design
          </Link>
        </nav>
        {/* Filters Button */}
        <button
          className="btn btn-outline-secondary"
          onClick={() => setShowFilters(!showFilters)}
        >
          <i className="bi bi-funnel"></i> Filters
        </button>
      </div>

      {/* Filter Options (Side by Side with Equal Size) */}
      {showFilters && (
        <div className="filter-container d-flex gap-3 p-3 mt-2 bg-light rounded shadow-sm">
          {/* Tags Filter */}
          <div className="filter-option w-100">
            <label className="form-label fw-bold">Tags</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search tags..."
            />
          </div>

          {/* Color Filter */}
          <div className="filter-option w-100">
            <label className="form-label fw-bold">Color</label>
            <div className="position-relative">
              <input
                type="color"
                className="form-control form-control-color w-100"
                style={{ height: "38px", padding: "5px" }} // Match height & padding with other inputs
              />
            </div>
          </div>

          {/* Timeframe Filter */}
          <div className="filter-option w-100">
            <label className="form-label fw-bold">Timeframe</label>
            <select className="form-select">
              <option>Now</option>
              <option>Past Week</option>
              <option>Past Month</option>
              <option>Past Year</option>
            </select>
          </div>
        </div>
      )}

      <Card />
      <div className="container mt-4">
        <h3 className="text-center mb-3">Featured Categories</h3>

        <div
          className="carousel-container"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <button className="carousel-btn left" onClick={scrollLeft}>
            ❮
          </button>

          <div className="carousel-track" ref={trackRef}>
            {getInfiniteItems(categories).map((category, idx) => (
              <div key={idx} className="carousel-slide">
                <img
                  src={category.image}
                  className="img-fluid rounded"
                  alt={category.name}
                />
                <p className="fw-bold mt-2">{category.name}</p>
              </div>
            ))}
          </div>

          <button className="carousel-btn right" onClick={scrollRight}>
            ❯
          </button>
        </div>
      </div>

      {/* Custom Carousel (Sliding from Right to Left)
      <div className="container mt-4">
        <h3 className="text-center mb-3">Featured Categories</h3>

        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {categories.map((group, index) => (
              <div key={index} className="carousel-slide">
                <div className="row">
                  {group.map((category, idx) => (
                    <div key={idx} className="col-md-3 text-center">
                      <img
                        src={category.image}
                        className="img-fluid rounded"
                        alt={category.name}
                      />
                      <p className="fw-bold mt-2">{category.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
         {/* <button className="carousel-btn left" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn right" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div> */}

      <Footer />
      {/* Styles for Custom Carousel */}
      {/* Styles */}
      <style>
        {`
          .carousel-container {
            position: relative;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            padding: 10px 0;
          }

          .carousel-track {
            display: flex;
            gap: 20px;
            width: max-content;
            animation: scroll 10s linear infinite;
            overflow-x: auto;
            scroll-behavior: smooth;
          }

          .carousel-slide {
            flex: 0 0 auto;
            width: 200px;
            text-align: center;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .carousel-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(0, 0, 0, 0.5);
            color: white;
            border: none;
            padding: 10px 15px;
            cursor: pointer;
            font-size: 20px;
            border-radius: 50%;
            z-index: 10;
          }

          .carousel-btn.left {
            left: 10px;
          }

          .carousel-btn.right {
            right: 10px;
          }

          .carousel-btn:hover {
            background: rgba(0, 0, 0, 0.8);
          }
        `}
      </style>

        
    </div>
  );
};

export default Dashboard;
