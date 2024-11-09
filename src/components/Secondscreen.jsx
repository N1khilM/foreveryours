import React, { useState } from "react";

const Secondscreen = ({ next }) => {
  const [answer, setAnswer] = useState("");

  const clickHandler = (event) => {
    const value = event.target.value;
    const response =
      value === "Yes"
        ? `you loved keeping me on my toes 😊`
        : "doesn't agree? 😏";

    setAnswer(response);

    // If the answer is 'Yes', wait for 2 seconds and move to the next screen
    if (value === "Yes") {
      setTimeout(() => {
        next(); // Call the next function after 2 seconds
      }, 3000); // Adjust the time as needed
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1>
          And then, there was your wit… You knew how to get under my skin,
          didn’t you? Every word was like a dare, a challenge, daring me to keep
          up, to give in. Admit it, babe.
        </h1>
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

export default Secondscreen;
