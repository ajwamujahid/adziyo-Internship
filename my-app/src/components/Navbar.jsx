import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
      }}
    >
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} mode
      </button>
    </nav>
  );
}

export default Navbar;
