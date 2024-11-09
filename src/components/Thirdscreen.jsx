import React, { useState } from "react";

const Thirdscreen = ({ next }) => {
  const [answer, setAnswer] = useState("");

  const clickHandler = (event) => {
    const value = event.target.value;
    const response = value === "Yes" ? `Yayy! 😊` : " Ah, Dont say NO 😑";

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
          The first time you touched me, even by accident… it was like a spark.
          I knew there was no going back. Tell me, did you feel it too?
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

export default Thirdscreen;
