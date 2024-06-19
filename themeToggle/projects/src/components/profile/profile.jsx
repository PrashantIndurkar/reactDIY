import React, { useContext } from "react";
import { AuthContext } from "../../context/auth";

export const Profile = () => {
  const { isAuthenticated, errorMessage } = useContext(AuthContext);
  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      {isAuthenticated && <div>UserName</div>}
    </>
  );
};
