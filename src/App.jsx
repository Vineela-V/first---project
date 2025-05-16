import React from 'react';
import LanguageContext from './context/LanguageContext'; 
import LanguageSwitcher from './Components/LanguageSwitcher';
import Greeting from './Components/Greeting';

function App() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <LanguageSwitcher />
        <Greeting />
      </div>
    </LanguageProvider>
  );
};

export default App;