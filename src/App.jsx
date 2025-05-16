import React from 'react';
import LanguageContext from './context/LanguageContext'; 
import Header from './Components/Header';
import Greeting from './Components/Greeting';

function App() {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <Greeting />
      </div>
    </LanguageProvider>
  );
};

export default App;