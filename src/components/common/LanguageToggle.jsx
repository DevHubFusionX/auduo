import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';

const LanguageToggle = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ha' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-sand hover:bg-cream transition-colors shadow-warm"
      title="Switch Language"
    >
      <FaGlobe className="text-brown" />
      <span className="text-sm font-semibold text-earth">
        {language === 'en' ? 'EN' : 'HA'}
      </span>
    </button>
  );
};

export default LanguageToggle;