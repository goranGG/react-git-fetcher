import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function UserRepos() {
  const { userReposData } = useContext(UserContext);
  const reposList = userReposData.map((repo) => <li>{repo.name}</li>);

  return (
    <>
      <hr />
      <div>UserRepos</div>
      <hr />
      <ul>{reposList}</ul>
    </>
  );
}

export default UserRepos;
