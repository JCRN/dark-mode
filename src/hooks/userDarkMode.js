import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function darkMode() {
  const [dark, setDark] = useLocalStorage("");
  useEffect(() => {
    dark
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [dark]);

  return [dark, setDark];
}
