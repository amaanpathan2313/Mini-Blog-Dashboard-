
import { useEffect, useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  
  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? " Dark Mode" : " Light Mode"}
    </button>
  );
};

export default ThemeToggle;
