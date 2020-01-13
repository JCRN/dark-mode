import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("");
  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}
