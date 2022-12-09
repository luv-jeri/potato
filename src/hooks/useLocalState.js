import { useState, useEffect } from 'react';

const useLocalState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    if (localValue) return JSON.parse(localValue);
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalState;
