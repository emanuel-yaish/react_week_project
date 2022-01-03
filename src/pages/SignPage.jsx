import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import "./SignPage.css";

function SignPage(props) {
  return (
    <div className="sign-page">
      <SignUp />
      <SignIn />
    </div>
  );
}

export default SignPage;
