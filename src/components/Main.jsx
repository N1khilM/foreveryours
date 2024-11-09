import React, { useState } from "react";
import Firstscreen from "./Firstscreen";
import Secondscreen from "./Secondscreen";
import Thirdscreen from "./Thirdscreen";
import Fourthscreen from "./Fourthscreen";
import Fifthscreen from "./Fifthscreen";
import Congratulations from "./Congratulations";

const Main = () => {
  // State to keep track of the current screen index
  const [currentScreen, setCurrentScreen] = useState(0);

  // Function to go to the next screen
  const goToNextScreen = () => {
    setCurrentScreen((prevScreen) => prevScreen + 1);
  };

  // Array of screens to render one by one
  const screens = [
    <Firstscreen next={goToNextScreen} />,
    <Secondscreen next={goToNextScreen} />,
    <Thirdscreen next={goToNextScreen} />,
    <Fourthscreen next={goToNextScreen} />,
    <Fifthscreen next={goToNextScreen} />,
    <Congratulations />,
  ];

  return (
    <div>
      {/* Render the current screen based on the index */}
      {screens[currentScreen]}
    </div>
  );
};

export default Main;
