import React, { useEffect, useState } from "react";
import loadingIcon from "../assets/images/ei_1644409695507-removebg-preview.png"; // Adjust path as needed

const PreloaderAndCursor = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust as needed

    // Add class to hide default cursor
    document.body.classList.add("tt-magic-cursor");

    // Custom cursor movement
    const ball = document.getElementById("ball");

    const moveCursor = (e) => {
      if (ball) {
        ball.style.left = `${e.clientX}px`;
        ball.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("tt-magic-cursor");
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-icon">
              <img src={loadingIcon} alt="Loading Icon" />
            </div>
          </div>
        </div>
      )}

      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
    </>
  );
};

export default PreloaderAndCursor;

