import { useState } from "react";
import "./App.css";

const handleThemeSwitch = (setDarkTheme) => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setDarkTheme(false);
    return;
  }
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
  setDarkTheme(true);
};

function App() {
  const [darkTheme, setDarkTheme] = useState(initialTheme);
  return (
    <div className="max-w-md rounded-md bg-slate-200 p-5 dark:bg-slate-300/80">
      <h1 className="mb-2 text-xl font-bold">Tailwind Dark/Light Mode</h1>
      <p className="mb-4">
        In this tutorial we will be learning how to enable dark mode for your
        tailwind react website/app
      </p>
      <button
        className="rounded-md bg-slate-500 px-5 py-1 font-bold"
        onClick={() => {
          handleThemeSwitch(setDarkTheme);
        }}
      >
        <div className="moon">
          {darkTheme ? (
            <i className="fa-solid fa-sun"></i>
          ) : (
            <i className="fa-regular fa-moon"></i>
          )}
        </div>
      </button>
    </div>
  );
}

export default App;
