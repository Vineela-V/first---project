import React from 'react';
import { GlobalStateProvider } from './context/GlobalStateContext';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <GlobalStateProvider>
      <div className="app">
        <Header />
        <UserInfo />
        <ThemeSwitcher />
      </div>
    </GlobalStateProvider>
  );
}

export default App;
