import React, { useState } from "react";
import "./StepsNav.css";

function StepsNav(props) {
  const { steps } = props;
  const [activeButton, setActiveButton] = useState(steps[0]);
  console.log(steps);

  const getActiveButton = (step) => {
    setActiveButton(step);
  };

  return (
    <div className="step-nav">
      {steps.map((step) => (
        <button
          onClick={() => getActiveButton(step)}
          key={step}
          className={`step-button ${activeButton === step ? "active" : ""}`}
        >
          {step}
        </button>
      ))}
    </div>
  );
}

export default StepsNav;
