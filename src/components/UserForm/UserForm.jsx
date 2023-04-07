import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

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
    <>
      <form onSubmit={handleFormSubmit}>
        <label>User</label>
        <div>
          <input className="input-username" onChange={onUpdateUsername}></input>
        </div>
      </form>
    </>
  );
}

export default UserForm;
