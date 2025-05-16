import React, { useContext} from "react";
import LanguageContext from "../context/LanguageContext";

function Greeting() {
    const { language } = useContext(LanguageContext);

    return (
        <div>
            {language === 'en' ? (
                <h1>Heyy! Welcome to the App.</h1>
            ): (
                <h1>హే! అప్ కి స్వాగతం.</h1>
            )}
        </div>
    );
}

export default Greeting;