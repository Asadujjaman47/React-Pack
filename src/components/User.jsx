import React, { useContext } from "react";
import { userContext } from "../App";

const User = () => {
  const data = useContext(userContext);

  return (
    <div>
      <h3>Hello {data}</h3>
    </div>
  );
};

export default User;
