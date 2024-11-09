import React, { useState } from "react";

const Fifthscreen = ({ next }) => {
  const [answer, setAnswer] = useState("");

  const clickHandler = (event) => {
    const value = event.target.value;
    const response =
      value === "Yes"
        ? `Thankyou!😍`
        : "Dont break my Heart, Pls click that Yes";

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
          It wasn’t long before I knew I wanted you. Only you. The way you made
          me feel, the way you made life electric and wild… like I’d finally
          found something real. So tell me, Babe, you still with me on this?
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

export default Fifthscreen;
