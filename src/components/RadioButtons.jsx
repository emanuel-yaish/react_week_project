import React from "react";
import "./RadioButtons.css";

function RadioButtons({ mainLabel, options, onInputChangeCallBack }) {
  return (
    <div className="radio-buttons">
      <label className="radio-buttons-main-label">{mainLabel}</label>
      <div className="radio-buttons-container">
        {options.map((option) => (
          <div key={option}>
            <input
              onChange={onInputChangeCallBack}
              className="radio-buttons-input"
              type="radio"
              id={option}
              name={mainLabel}
              value={option}
            />
            <label className="radio-buttons-label" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RadioButtons;
