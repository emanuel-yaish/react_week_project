import React from "react";
import GhostButton from "./GhostButton";
import dislikeButton from "../assets/images/disadvantages.svg";
import likeButton from "../assets/images/advantage.svg";
import "./Profile.css";

function Profile(props) {
  const { avatar, name, birthDay, location, height, status, hobbies, about } =
    props.profile;

  const [firstName, lastName] = name.split(" ");
  //to do helper function that calculate the age
  function getAge(date) {
    console.log(date);

    return 18;
  }

  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  function getHobbies(hobbiesArray) {
    const fiveHobbies = [];
    for (let index = 0; index < hobbiesArray.length && index < 3; index++) {
      fiveHobbies.push(hobbiesArray[index]);
    }
    return fiveHobbies.map((hobby) => (
      <div key={hobby} className="profile-age">
        {hobby}
      </div>
    ));
  }

  return (
    <div className="profile">
      <figure className="profile-figure">
        <img className="profile-image" src={avatar} alt={name} />
      </figure>
      <div className="profile-container">
        <div className="profile-more-container">
          <GhostButton text={"More"} />
        </div>
        <div className="profile-user-name-container">
          <h2 className="profile-user-name">
            <span className="profile-first-name">{firstName}</span>
            <span className="profile-last-name">{lastName}</span>
          </h2>
        </div>
        <div className="profile-info-container">
          <h4 className="profile-section-label">Info:</h4>
          <div className="profile-info">
            <div className="profile-info-item">
              <div className="profile-age">{getAge(birthDay)}</div>
              <label>Age</label>
            </div>
            <div className="profile-info-item">
              <div className="profile-location">{location}</div>
              <label>City</label>
            </div>
            <div className=""></div>
            <div className="profile-info-item">
              <div className="profile-height">{height}</div>
              <label>Height</label>
            </div>
            <div className="profile-info-item">
              <div className="profile-status">{status}</div>
              <label>Status</label>
            </div>
          </div>
        </div>
        <div className="profile-hobbies-container">
          <h4 className="profile-section-label">Hobbies:</h4>
          <div className="profile-hobbies">{getHobbies(hobbies)}</div>
        </div>
        <div className="profile-about">
          <h4 className="profile-section-label">about:</h4>
          <p>{truncate(about, 115, "...")}</p>
        </div>
        <div className="profile-buttons-container">
          <button className="profile-button">
            <img src={dislikeButton} alt="dislike" />
          </button>
          <button className="profile-button">
            <img src={likeButton} alt="dislike" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
