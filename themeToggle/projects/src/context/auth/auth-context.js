import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // login function to check valid the user
  const login = (username, password) => {
    if (username === "username" && password === "password") {
      setIsAuthenticated(true);
      setUser({ username });
    } else if (username === "" || password === "") {
      setErrorMessage("Please fill the username and password!");
    } else setErrorMessage("Username not found!");
  };

  //log out button
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, logout, login, errorMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
};
