import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../styles/user-details.css";

function UserDetails() {
  const { userData } = useContext(UserContext);

  const userDetailsHTML = (
    <div>
      <h2 className="user-name">
        <span>Name: </span>
        {userData.name}
      </h2>
      <div className="user-image">
        <a href={userData.avatar_url}>
          <img className="user-avatar" src={userData.avatar_url} alt="logo" />
        </a>
      </div>
      <div className="user-details">
        <div className="mb-10">
          <span>Location: </span>
          {userData.location}
        </div>
        <div>
          <span>BIO: </span>
          {userData.bio}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <hr className="mt-20 mb-20" />
      <h1>UserDetails</h1>
      {userData.length !== 0
        ? userDetailsHTML
        : "Enter giuthub name inside form and get the data..."}
    </div>
  );
}

export default UserDetails;
