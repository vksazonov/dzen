import React, { useEffect, useState } from 'react';
import './styles/DateSection.scss';
import { useTranslation } from 'react-i18next';


export const DateSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="date-section">
      <div className="date-section__date">
        <p className='date-section__weekday'>
          {t(`header.weekDays.${currentTime.toLocaleString('en-US', { weekday: 'short' }).toLowerCase()}`)}
        </p>
        <p className="date-section__rest">
          {t(`header.months.${currentTime.toLocaleString('en-US', { month: 'short' }).toLowerCase()}`)}{' '}
          {currentTime.getDate()}, {currentTime.getFullYear()}
        </p>
      </div>
      <div className="date-section__time">
        <img  
          src="./images/clock.svg" 
          alt="clock" 
          className="date-section__time-image" 
        />
        <p className="date-section__time-text">
          {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};