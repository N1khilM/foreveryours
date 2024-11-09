import React, { useState } from "react";

const Fourthscreen = ({ next }) => {
  const [answer, setAnswer] = useState("");

  const clickHandler = (event) => {
    const value = event.target.value;
    const response = value === "Yes" ? `Damn, awesome 😍` : "Haha Yeah 😁";

    setAnswer(response);

    // If the answer is 'Yes', wait for 2 seconds and move to the next screen
    if (value === "Yes" || value === "No") {
      setTimeout(() => {
        next(); // Call the next function after 2 seconds
      }, 3000); // Adjust the time as needed
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>
          By then, I was completely falling for you. Every look, every laugh,
          every little ‘accidental’ touch. You were in my mind, always. Even
          when I didn’t want you to be.
        </h1>
        <button value="Yes" onClick={clickHandler}>
          Me Too
        </button>
        <button value="No" onClick={clickHandler}>
          Really?
        </button>
        {/* Display the answer */}
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Fourthscreen;
