import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setStoredValue = (newValue) => {
    setValue((prev) => {
      const resolved = typeof newValue === "function" ? newValue(prev) : newValue;
      try {
        window.localStorage.setItem(key, JSON.stringify(resolved));
      } catch {}
      return resolved;
    });
  };

  return [value, setStoredValue];
}
