import React from "react";
import { useState } from "react";
import logo from "../../assets/taskify_logo.png";
import taskify_login from "../../assets/taskify_login.png";
import "../LoginPage/Login.css";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("login button clicked");
  };

  return (
    <div className="App">
      <div className="right-pane">
        <img src={taskify_login} className="login-poster" />
      </div>

      <div className="left-login-pane">
        <div className="logo-login-container">
          <img src={logo} className="logo-login" />
        </div>

        <div className="content">
          <div className="right-header">
            <h1 className="header">Log In</h1>
          </div>

          <div className="left-text">
            <p>Username</p>
            <input
              type="text"
              placeholder="Enter your username"
              className="login-info"
            />

            <p>Password</p>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="login-info"
            />

            <div className="show-password">
              <input
                type="checkbox"
                id="check"
                value={password}
                onChange={() => setShowPassword((prev) => !prev)}
              />
              <label htmlFor="password">Show Password</label>
            </div>
          </div>

          <button className="log-in-btn" onClick={handleLogin}>
            Log In
          </button>

          <p>Forgot your password?</p>
        </div>
      </div>
    </div>
  );
}
