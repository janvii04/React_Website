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
    { name: "Typography", image: "/img4.webp" },
    { name: "Ramotion", image: "/img5.webp" },
    { name: "Emote ", image: "/img6.webp" },
    { name: "Muti", image: "/img7.webp" },

  ]
 
const getInfiniteItems =(arr)=> [...arr,...arr];


const Dashboard = () => {
  const [showFilters, setShowFilters] = useState({});
const[color,setColor]=useState("#000000")

  const [pause, setPause] = useState(false);
  const [manualControl] = useState(false);
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
          className="btn btn-outline-secondary custom-filter-btn"
          onClick={() => setShowFilters(!showFilters)}
        >
          <i className="fa-solid fa-sliders"></i> Filters
        </button>
      </div>

      {/* Filter Options (Side by Side with Equal Size) */}
      {showFilters && (
        <div className="filter-container d-flex gap-3 p-3 mt-2 bg-white rounded shadow-sm">
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
          {/* <div className="filter-option w-100">
            <label className="form-label fw-bold ">Color</label>
            <div className="position-relative">
              <input
                type="color"
                className="form-control form-control-color  w-100"
                style={{ height: "38px", padding: "5px" }}
                
              />
            </div>
          </div> */}

<div className="filter-option w-100">
            <label className="form-label fw-bold">Color</label>
            <div className="position-relative">
              {/* Text Input for Hex Code */}
              <input
                type="text"
                className="form-control w-100"
                // placeholder="Enter hex or select color"
                value={color} // Show selected color hex
                readOnly // Prevent manual typing
              />

              {/* Color Picker */}
              <input
                type="color"
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "100%",
                  border: "none",
                  cursor: "pointer",
                  background: "transparent",
                }}
                value={color}
                onChange={(e) => setColor(e.target.value)} // Update hex value on color change
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
      <br/>
      <br/>
      <br/>
      <div className="d-flex justify-content-center align-items-center vh-90">
        <div className="btn-btn">
          <button className="px-4 py-2 rounded-pill text-white bg-dark border-none">
            Sign Up to Continue
          </button>
        </div>
      </div>
      <br/>
      <br/>
      <div className="container mt-4">
        <h3 className="text-center mb-3">Featured Categories</h3>

        <div
          className="carousel-container"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >


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

        </div>
      </div>

     

      <Footer />
      
      <style>
        {`
          .custom-filter-btn:hover{
          background-color:transparent !important;
          border-color: inherit !important;
          color:inherit !important;
          }

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
