import React from 'react';
import './styles/CloseButton.scss';
import { useDispatch } from 'react-redux';
import { handleCloseModal } from '../../redux/reducers/modalReducer';

export const CloseButton = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(handleCloseModal());
  };

  return (
    <button type="button" className="modal__button--close" onClick={closeModal}>
      X
    </button>
  );
};
