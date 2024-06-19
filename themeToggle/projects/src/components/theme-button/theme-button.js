import React, { useContext } from "react";
import ThemeContext from "../../context/theme-provider";

const ThemeButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };
  return (
    <div>
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeButton;
