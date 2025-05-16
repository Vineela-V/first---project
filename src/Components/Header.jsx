import React, { useContext } from "react";
import { LanguageContext } from '../context/LanguageContext';

function Header() {
    const {language, toggleLanguage } = useContext(LanguageContext);
    
    return (
        <header>
            <button onClick={toggleLanguage}>
                {language === 'en' ? 'Switch to Telugu' : 'ఇంగ్లీష్ లోకి మార్చండి .'}
            </button>
        </header>
    );
}

export default Header;