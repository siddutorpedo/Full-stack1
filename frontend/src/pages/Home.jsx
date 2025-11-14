import React, { useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX / window.innerWidth) * 10;
      const moveY = (e.clientY / window.innerHeight) * 10;
      document.documentElement.style.setProperty("--move-x", `${moveX}px`);
      document.documentElement.style.setProperty("--move-y", `${moveY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="home-container"
    >
      <div className="overlay"></div>
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <span key={i} className="particle"></span>
        ))}
      </div>
      <div className="content">
        <h1>Attendance System</h1>
        <p>Select your branch to continue</p>
        <div className="branch-cards">
          <div className="branch-card bca">BCA</div>
          <div className="branch-card bcom">BCOM</div>
          <div className="branch-card ba">BA</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
