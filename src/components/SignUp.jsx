import React from "react";
import CostumInput from "./CostumInput";

function SignUp({ userInput, handleInputChange }) {
  return (
    <div className="log-in">
      <CostumInput
        onInputChangeCallBack={handleInputChange}
        label="Email"
        type="text"
        name="email"
        value={userInput.email}
        id="email-input"
      />
      <CostumInput
        onInputChangeCallBack={handleInputChange}
        label="Password"
        type="password"
        name="password"
        value={userInput.password}
        id="password-input"
      />
      <CostumInput
        onInputChangeCallBack={handleInputChange}
        label="Confirm Password"
        type="confirm"
        name="confirm"
        value={userInput.confirm}
        id="confirm-input"
      />
    </div>
  );
}

export default SignUp;
