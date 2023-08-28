import React, { ChangeEvent, useState } from 'react';
import './styles/Header.scss';
import { Container, Row, Figure, Form, Button } from 'react-bootstrap';
import { useSearchContext } from '../../context/SearchContext';
import { NavLink } from 'react-router-dom';
import { DateSection } from './DateSection';


export const Header = () => {
  const [isBlocked, setIsBlocked] = useState(true);
  const { query, setQuery } = useSearchContext();

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    query.length > 0 ? setIsBlocked(false) : setIsBlocked(true);
    
  };

  const handleReset = () => {
    setQuery('');
    setIsBlocked(true);
  };

  return (
    <header className="header">
      <Container fluid='lg' className="header__container">
        <Row className="header__left">
          <NavLink to="/" className='nav__link'>
            <Figure className="header__logo">
              <Figure.Image 
                className="header__logo-image" 
                src="./images/logo.jpg"
                height= {40}
                width= {40}
              />

              <Figure.Caption className="header__logo-text">
                Inventory
              </Figure.Caption>
            </Figure>
          </NavLink>
          
          <Form.Control
            className='header__input'
            type='text'
            placeholder='Поиск'
            value={query}
            onChange={handleInput}
          />

          <Button
            className="header__input-clear"
            variant="link"
            disabled={isBlocked}
            onClick={handleReset}
          >
      x
          </Button>
        </Row>
        <DateSection />
      </Container>

    </header>
  );
};
