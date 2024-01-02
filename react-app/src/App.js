import "./App.css";
import React from "react";
import logo from "../src/assets/taskify_logo.png";
import homePoster from "../src/assets/taskify.png";

function App() {
  return (
    <div className="App">
      <div className="left-pane">
        <div className="logo-container">
          <img src={logo} className="logo" />
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
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="right-pane">
        <img src={homePoster} className="home-poster" />
      </div>
    </div>
  );
}

export default App;
