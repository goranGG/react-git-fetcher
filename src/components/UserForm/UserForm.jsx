import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

import "../../styles/user-form.css";
import "../../styles/buttons.css";

function UserForm() {
  const [formUsername, setFormUsername] = useState("");
  const { fetchUser } = useContext(UserContext);

  function onUpdateUsername(event) {
    setFormUsername(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    fetchUser(formUsername);
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
