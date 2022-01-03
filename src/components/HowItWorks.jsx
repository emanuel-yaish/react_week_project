import React from "react";
import { NavLink } from "react-router-dom";
import select from "../assets/images/decision.svg";
import "./HowItWorks.css";

function HowItWorks(props) {
  return (
    <div className="how-it-works">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="how-it-works-select">
        <div>
          <img src={select} alt="decision" />
        </div>
        <h4 className="text-center">choose</h4>
        <NavLink className="how-it-works-link" to="/signpage">
          Live
        </NavLink>
        <span className="medium-margin">OR</span>
        <NavLink className="how-it-works-link" to="/events">
          Date
        </NavLink>
      </div>
    </div>
  );
}

export default HowItWorks;
