import React, { useEffect, useState } from 'react';
import './styles/DateSection.scss';


export const DateSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const capitalizeFirstLetter = (str: string) => (
    str.charAt(0).toUpperCase() + str.slice(1)
  );

  return (
    <div className="date-section">
      <div className="date-section__date">
        <p className='date-section__weekday'>
          {capitalizeFirstLetter(currentTime.toLocaleString('ru-RU', { weekday: 'long' }))}
        </p>
        <p className="date-section__rest">
          {capitalizeFirstLetter(currentTime.toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }))}
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
