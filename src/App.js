import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar/Navbar';
import Faq from './components/Faq/Faq';
import Introduction from './components/Introduction/Introduction';
import MainPage from './components/MainPage/MainPage';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Contact from './components/Signup/Signup';
import Courses from './components/Courses/Courses';
import EpicMoments from './components/EpicMoments/EpicMoments';
import OutlineWrapper from './components/OutlineWrapper/OutlineWrapper';
import Footer from './components/Footer/Footer';
import FloatingButton from './components/FloatingButton/FloatingButton';

function LanguageWrapper() {
  const { lang } = useParams();
  const { setLanguage } = useLanguage();
  const { i18n } = useTranslation();

  useEffect(() => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }, [lang, setLanguage, i18n]);

  return (
    <Routes>
      <Route path="/" element={<>
              <MainPage />
              <OutlineWrapper><Courses /></OutlineWrapper>
              <OutlineWrapper><EpicMoments /></OutlineWrapper>
              <Footer />
            </>} />
      <Route path="faq" element={<Faq />} />
      <Route path="aboutme" element={<Introduction />} />
      <Route path="signup" element={<Contact />} />
    </Routes>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/en" />} /> {/* Redirect root to /en */}
          <Route path="/:lang/*" element={<LanguageWrapper />} />
        </Routes>
        <FloatingButton />
      </Router>
    </LanguageProvider>
  );
}

export default App;
