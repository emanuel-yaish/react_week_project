import React from "react";
import SignIn from "../components/SignIn";
import LogIn from "../components/LogIn";

function SignPage(props) {
  return (
    <div className="sign-page">
      <SignIn />
      <LogIn />
    </div>
  );
}

export default SignPage;
