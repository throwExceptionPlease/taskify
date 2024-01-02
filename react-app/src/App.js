import "./App.css";
import React, { useState, useEffect } from "react";
import LoginPage from "../src/pages/LoginPage/LoginPage.js";
import LandingPage from "./pages/LandingPage/LandingPage.js";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleOnClick = () => {
    if (showLogin === false) {
      setShowLogin(true);
    }
  };

  /* Only print after initial render and only if showLogin is true */
  useEffect(() => {
    if (showLogin !== false) {
      console.log(showLogin);
    }
  }, [showLogin]);

  return (
    <>
      {!showLogin && (
        <LandingPage
          showLogin={showLogin}
          handleOnClick={() => setShowLogin(true)}
        />
      )}
      {showLogin && <LoginPage />}
    </>
  );
}

export default App;
