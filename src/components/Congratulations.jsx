import React, { useState } from "react";
import "./Congratulations.css";

const Congratulations = () => {
  const [answer, setAnswer] = useState("");
  const [showNoButton, setShowNoButton] = useState(true); // New state to control No button visibility
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: "0",
    left: "0",
  });

  const moveButton = () => {
    const newTop = Math.random() * 50 + 10 + "vh"; // Random top position
    const newLeft = Math.random() * 50 + 10 + "vw"; // Random left position
    setNoButtonPosition({ top: newTop, left: newLeft });
  };

  const clickHandler = (event) => {
    const value = event.target.value;

    if (value === "Yes") {
      setAnswer(" 💖🌹✨ I’m so happy! 😘💕");
      setShowNoButton(false);
    } else if (value === "No") {
      // Move the No button around

      setAnswer("Heyy!!! 😏💔 Don't worry, you’ll be mine soon enough! 😜");
    }
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url('./images/firstscreen.webp')", // Your image path here
        backgroundSize: "cover", // Makes the background cover the entire area
        backgroundPosition: "center", // Centers the background
        minHeight: "100vh", // Makes the background cover the full viewport height
      }}
    >
      <div className="row justify-content-center">
        <h1 className="title">
          You’re my forever, my one and only. 💖✨
          <br />
          I want every second, every memory, every crazy, breathtaking moment to
          be with you. 🌹
          <br />
          So… will you let me have you forever? Will you be mine? 💕💍
        </h1>
        <div className="buttons">
          <button value="Yes" onClick={clickHandler} className="yes-button">
            Yes 💕
          </button>
          {showNoButton && (
            <button
              value="No"
              onClick={clickHandler}
              onMouseEnter={moveButton}
              className="no-button"
              style={{
                top: noButtonPosition.top,
                left: noButtonPosition.left,
                position: "absolute", // This makes the button move around
                transition: "all 0.5s ease", // Smooth transition when it moves
              }}
            >
              No 💔
            </button>
          )}
        </div>
        {/* Display the answer */}
        <p className="answer">{answer}</p>
      </div>
    </div>
  );
};

export default Congratulations;
