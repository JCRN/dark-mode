import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function darkMode() {
  const [someValue, setSomeValue] = useLocalStorage("");
  useEffect(() => {
    someValue
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, []);
}
