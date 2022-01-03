import React, { useEffect, useState } from "react";
import ProfilesApi from "../api/ProfilesApi";
import Profile from "./Profile";
import "./Profiles.css";

function Profiles(props) {
  const [profiles, setProfiles] = useState();
  useEffect(() => {
    const getProfiles = async () => {
      try {
        const response = await ProfilesApi.get("/profiles");
        console.log(response);
        setProfiles(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProfiles();
  }, []);

  if (!profiles)
    return (
      <div className="loding-profiles">
        <h2>Loading Profiles</h2>
        <div class="lds-heart">
          <div></div>
        </div>
      </div>
    );
  console.log("profiles", profiles);
  return (
    <div className="profiles">
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

export default Profiles;
