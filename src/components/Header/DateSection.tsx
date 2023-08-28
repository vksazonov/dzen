import React, { useEffect, useState } from 'react';
import './styles/DateSection.scss';
import { Col, Row, Image } from 'react-bootstrap';


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
    <Row className="date-section">
      <Col className="date-section__date">
        <p className='date-section__weekday'>
          {capitalizeFirstLetter(currentTime.toLocaleString('ru-RU', { weekday: 'long' }))}
        </p>
        <p className="date-section__rest">
          {capitalizeFirstLetter(currentTime.toLocaleString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }))}
        </p>
      </Col>
      <Row className="date-section__time">
        <Image  
          src="./images/clock.svg" 
          alt="clock" 
          className="date-section__time-image" 
          roundedCircle
        />
        <p className="date-section__time-text">
          {currentTime.toLocaleTimeString()}
        </p>
      </Row>
    </Row>
  );
};