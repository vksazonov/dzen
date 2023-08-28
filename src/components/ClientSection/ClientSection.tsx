import React from 'react';
import './ClientSection.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Col, Image, ListGroup } from 'react-bootstrap';

export const ClientSection = () => {

  return (
    <nav className='client'>
      <Col className='client__container'>
        <Col className="client__photo-container">
          <Image 
            src="./images/man.jpg" 
            alt="photo" 
            className="client__photo" 
          />
          <Image 
            src="./images/settings.svg" 
            alt="settings" 
            className="client__settings" 
          />
        </Col>

        <ListGroup as="ul" className="nav">
          <ListGroup.Item as="li" className="nav__item">
            <NavLink to="/orders" className={({isActive }) => classNames('nav__link', {
              'is-active': isActive
            })}>
              Заказы
            </NavLink>
          </ListGroup.Item>
          <ListGroup.Item as="li" className="nav__item">
            <NavLink to="/" className={({isActive }) => classNames('nav__link', {
              'is-active': isActive
            })}>
              Продукты
            </NavLink>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </nav>
  );
};