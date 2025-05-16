import React, { useContext } from 'react';
import GlobalStateContext from '../context/GlobalStateContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(GlobalStateContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;
