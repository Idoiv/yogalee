import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const initialLang = localStorage.getItem('selectedLanguage') || 'en';
  const [language, setLanguage] = useState(initialLang);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const value = { language, setLanguage };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
