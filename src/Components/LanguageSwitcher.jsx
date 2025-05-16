import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div>
      <p>Current language: {language}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('te')}>Telugu</button>
    </div>
  );
};

export default LanguageSwitcher;
