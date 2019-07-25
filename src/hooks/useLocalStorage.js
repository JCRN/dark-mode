import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    // Get value from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored JSON or if undefined, return initial value
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
