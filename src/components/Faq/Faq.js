import React from 'react';
import './Faq.css';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he'; // Assuming 'he' is the code for Hebrew
  
  return (
    <div className={`faq-container ${isRTL ? 'rtl' : ''}`}>
      <h1 className="faq-title">{t('faq_title')}</h1>

      <div className="faq-layout">
        <div className="faq-section">
          <h2 className="faq-question">{t('cost_question')}</h2>
          <p className="faq-answer">{t('cost_answer')}</p>

          <h2 className="faq-question">{t('bring_question')}</h2>
          <p className="faq-answer">{t('bring_answer')}</p>

          <h2 className="faq-question">{t('duration_question')}</h2>
          <p className="faq-answer">{t('duration_answer')}</p>

          <h2 className="faq-question">{t('forBeginners_question')}</h2>
          <p className="faq-answer">{t('forBeginners_answer')}</p>

          <h2 className="faq-question">{t('location_question')}</h2>
          <div className="faq-answer">
          <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7301.456425438792!2d34.774406394460286!3d32.09424392054942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bf17f940497%3A0x300b965a4daf5aea!2sYarkon%20Park!5e0!3m2!1sen!2sil!4v1694809568085!5m2!1sen!2sil"
            >
            </iframe>
          </div>

          <h2 className="faq-question">{t('cancellationPolicy_question')}</h2>
          <p className="faq-answer">{t('cancellationPolicy_answer')}</p>
        </div>

        <div className="intro-image">
          <img src="/favicon.ico" alt="Intro" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
