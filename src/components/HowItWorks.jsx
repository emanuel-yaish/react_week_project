import React from "react";
import { Link } from "react-router-dom";

function HowItWorks(props) {
  return (
    <div className="how-it-works">
      <Link to="/signpage">Live</Link>
      <span> OR </span>
      <Link to="/events">Date</Link>
    </div>
  );
}

export default HowItWorks;
