import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

import "../../styles/buttons.css";

function ResetData() {
  const { resetUser } = useContext(UserContext);
  return (
    <div className="text-align-center">
      <button className="button button-reset" onClick={resetUser}>Reset</button>
    </div>
  );
}

export default ResetData;
