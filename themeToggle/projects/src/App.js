import "./App.css";
import Accordion from "./components/Accordion";
import RandomColorGenerator from "./components/randomColor";
import StarRating from "./components/star-rating";
import ThemeButton from "./components/theme-button/theme-button";
import { useContext, useEffect } from "react";
import ThemeContext from "./context/theme-provider";
import { Login } from "./components/login";
import { Profile } from "./components/profile";

function App() {
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    document.body.classList = theme;
  });
  return (
    <>
      <ThemeButton />
      <Profile />
      {/* <h1>Accordion</h1>
      <Accordion /> */}
      {/* 
      <h1>Random color </h1>
      <RandomColorGenerator /> */}

      {/* <StarRating /> */}
      <Login />
    </>
  );
}

export default App;
