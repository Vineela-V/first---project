import React, { createContext, useState } from 'react';
const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  const login = (username) => setUser({ name: username });
  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <GlobalStateContext.Provider
      value={{
        user,
        theme,
        login,
        toggleTheme,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;
