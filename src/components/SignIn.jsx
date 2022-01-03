import React from "react";
import { Link } from "react-router-dom";

function SignIn(props) {
  return (
    <div className="sign-in">
      <Link to="/profiles">Sign In</Link>
    </div>
  );
}

export default SignIn;
