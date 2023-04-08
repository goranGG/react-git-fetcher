import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserRepos() {
  const { userReposData } = useContext(UserContext);
  const reposList = userReposData.map((repo) => <li>{repo.name}</li>);

  return (
    <>
      <hr />
      <h1>UserRepos</h1>
      <ul>{reposList}</ul>
      <hr className="mb-20" />
    </>
  );
}

export default UserRepos;
