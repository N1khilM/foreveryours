import React, { useState } from "react";

const Firstscreen = ({ next }) => {
  const [answer, setAnswer] = useState("");

  const clickHandler = (event) => {
    const value = event.target.value;
    const response =
      value === "Yes" ? `You remembered! 😊` : "How could you forget? 😏";

    setAnswer(response);

    // If the answer is 'Yes', wait for 2 seconds and move to the next screen
    if (value === "Yes") {
      setTimeout(() => {
        next(); // Call the next function after 2 seconds
      }, 2000); // Adjust the time as needed
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>Do you remember that first time you looked at me?</h1>
        <button value="Yes" onClick={clickHandler}>
          Yes
        </button>
        <button value="No" onClick={clickHandler}>
          No
        </button>
        {/* Display the answer */}
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Firstscreen;
