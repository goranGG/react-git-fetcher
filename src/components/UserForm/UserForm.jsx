import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import "../../styles/user-form.css";
import "../../styles/buttons.css";

function UserForm() {
  const { userData, fetchUser } = useContext(UserContext);
  const [formUsername, setFormUsername] = useState("");

  useEffect(() => {
    console.log(userData.length);
    if (userData.length === 0) {
      setFormUsername("");
    }
  }, [userData]);

  function onUpdateUsername(event) {
    setFormUsername(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formUsername !== "") {
      fetchUser(formUsername);
    }
  }

  return (
    <div className="user-form">
      <form onSubmit={handleFormSubmit}>
        <label className="label-username mb-20" htmlFor="input-username">
          User
        </label>
        <input
          className="input-username mb-20"
          id="input-username"
          onChange={onUpdateUsername}
          value={formUsername}
          placeholder="Enter git account"
        />
        <button className="button button-submit" type="submit">
          Get details
        </button>
      </form>
    </div>
  );
}

export default UserForm;
