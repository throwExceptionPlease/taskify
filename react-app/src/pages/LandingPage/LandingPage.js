import React, { useEffect } from "react";
import "../LandingPage/LandingPage.css";
import logo from "../../assets/taskify_logo.png";
import homePoster from "../../assets/taskify.png";

export default function LandingPage({ showLogin, handleOnClick }) {
  useEffect(() => {
    if (showLogin !== false) {
      console.log(showLogin);
    }
  }, [showLogin]);

  return (
    <div className="App">
      <div className="left-pane">
        <div className="logo-container">
          <img src={logo} className="logo" alt="Logo" />
        </div>

        <div className="left-header">
          <h1 className="header">Discover What You Can Achieve</h1>
        </div>

        <div className="left-text">
          <p className="text">
            Find out what tasks you need to accomplish, connect with others to
            achieve these tasks, and learn new skills for a more productive and
            interconnected journey.
          </p>
        </div>

        <button className="get-started-btn" onClick={handleOnClick}>
          Get Started
        </button>
      </div>
      
      <div className="right-pane">
        <img src={homePoster} className="home-poster" alt="Home Poster" />
      </div>
    </div>
  );
}
