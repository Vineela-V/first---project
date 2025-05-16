import React from 'react';
import { GlobalStateProvider } from './context/GlobalStateContext';
import UserInfo from './Components/UserInfo';
import ThemeSwitcher from './Components/ThemeSwitcher';

function App() {
  return (
    <GlobalStateProvider>
      <div>
        <UserInfo />
        <ThemeSwitcher />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
