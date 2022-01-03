import React from "react";
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
        <button className="profile-more-button">More</button>
        <h2 className="profile-user-name">
          <span className="profile-first-name">{firstName}</span>
          <span className="profile-last-name">{lastName}</span>
        </h2>
        <div className="profile-info-container">
          <div className="profile-age">{getAge(birthDay)}</div>
          <div className="profile-location">{location}</div>
          <div className="profile-height">{height}</div>
          <div className="profile-status">{status}</div>
        </div>
        <div className="profile-hobbies-container">{getHobbies(hobbies)}</div>
        <div className="profile-about">
          <h4 className="profile-about-label">about</h4>
          <p>{truncate(about, 115, "...")}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
