import React, { createContext, useState } from 'react';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'te' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageContext;