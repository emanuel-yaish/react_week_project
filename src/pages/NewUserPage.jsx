import React, { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import Preferences from "../components/Preferences";
import StepsNav from "../components/StepsNav";

import "./NewUserPage.css";

function NewUserPage(props) {
  const steps = ["Personal Info", "Preferences"];
  const formFileds = [{ fildNamge: { type: "text", name: "userName" } }];
  console.log(formFileds);

  const [selected, setSelected] = useState([]);
  const [userInput, setuserInput] = useState({
    avatar: "",
    name: "",
    birthDay: "",
    location: "",
    height: "",
    status: "",
    hobbies: "",
    about: "",
  });

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setuserInput({ ...userInput, [name]: value });
  };

  return (
    <div className="new-user-page">
      <div className="form-container">
        <div className="new-user-header">
          <h2 className="form-title">
            <span className="form-title-black">Welcome To</span> Live Or Date
          </h2>
          <p className="form-intro">Let's create your profile.</p>
        </div>
        <StepsNav steps={steps} />

        <form className="new-user-form">
          <div className="form-instruction-container">
            <p className="form-instruction">Enter your details below.</p>
          </div>
          <PersonalInfo
            userInput={userInput}
            handleInputChange={handleInputChange}
            selected={selected}
            setSelected={setSelected}
          />
          <Preferences />
          <div className="form-buttons-container">
            <button className="form-button">Prev</button>
            <button className="form-button">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewUserPage;
