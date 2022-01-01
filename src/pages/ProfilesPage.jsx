import React from "react";
import Nav from "../components/Nav";
import Profiles from "../components/Profiles";
import "./ProfilesPage.css";

function ProfilesPage(props) {
  return (
    <div className="profiles-page">
      <Profiles />
    </div>
  );
}

export default ProfilesPage;
