import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserDetails() {
  const { userData } = useContext(UserContext);

  return (
    <>
      <br />
      <hr />
      <div>UserDetails</div>
      <div>
        <a href={userData.avatar_url}>{userData.avatar_url}</a>
      </div>
      <div>{userData.name}</div>
      <div>{userData.location}</div>
      <div>{userData.bio}</div>
    </>
  );
}

export default UserDetails;
