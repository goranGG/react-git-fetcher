import React, { createContext, useState } from "react";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);
  const [userReposData, setUserReposData] = useState([]);
  const [formUsername, setFormUsername] = useState("");

  const fetchUser = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setUserData(data));
    fetchUserRepo(user);
  };

  const fetchUserRepo = (user) => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setUserReposData(data));
  };

  const resetUser = () => {
    setUser("");
    setUserData([]);
    setUserReposData([]);
    setFormUsername("");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        fetchUser,
        userData,
        userReposData,
        resetUser,
        formUsername,
        setFormUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserContext = createContext();
