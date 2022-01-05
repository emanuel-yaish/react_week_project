import React, { useState } from "react";
import ProfilesApi from "../api/ProfilesApi";
import PersonalInfo from "../components/PersonalInfo";
import Preferences from "../components/Preferences";
import StepsNav from "../components/StepsNav";

import "./NewProfilePage.css";

function NewProfilePage(props) {
  console.log(props);
  const steps = ["PersonalInfo", "Preferences"];
  // const formFileds = [{ fildNamge: { type: "text", name: "userName" } }];
  // console.log(formFileds);

  const [currentFormType, setCurrentFormType] = useState(steps[0]);
  const [selected, setSelected] = useState([]);
  setSelected([1]);
  console.log(selected);
  const [userInput, setuserInput] = useState({
    avatar: "",
    name: "",
    gender: "",
    birthDay: "",
    location: "",
    height: "",
    status: "",
    hobbies: "",
    about: "",
  });

  const handleFormTypeChange = (formType) => {
    setCurrentFormType(formType);
  };

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    console.log(name, value);
    setuserInput({ ...userInput, [name]: value });
  };

  const createNewProfile = async (e) => {
    e.preventDefault();
    try {
      const resp = await ProfilesApi.post("/profiles", userInput);
      console.log(resp.data);
      window.location.href = "/profiles";
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  return (
    <div className="new-profile-page">
      <div className="form-container">
        <div className="new-user-header">
          <h2 className="form-title">
            <span className="form-title-black">Welcome To</span> Live Or Date
          </h2>
          <p className="form-intro">Let's create your profile.</p>
        </div>
        <StepsNav
          formTypeChangeCallback={handleFormTypeChange}
          steps={steps}
          currentFormType={currentFormType}
        />

        <form className="new-user-form">
          <div className="form-instruction-container">
            <p className="form-instruction">Enter your details below.</p>
          </div>

          {currentFormType === steps[0] ? (
            <PersonalInfo
              userInput={userInput}
              handleInputChange={handleInputChange}
              // selected={selected}
              // setSelected={setSelected}
            />
          ) : (
            <Preferences
              userInput={userInput}
              handleInputChange={handleInputChange}
            />
          )}

          <div className="form-button-container">
            <button onClick={createNewProfile} className="form-button">
              Create Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProfilePage;
