import React, { createContext, useState } from "react";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState([]);
  const [userReposData, setUserReposData] = useState([]);

  const fetchUser = (user) => {
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) => {
        console.log(error);
      });
    fetchUserRepo(user);
  };

  const fetchUserRepo = (user) => {
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => {
        return response.json();
      })
      .then((data) => setUserReposData(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const resetUser = () => {
    setUser("");
    setUserData([]);
    setUserReposData([]);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const UserContext = createContext();
