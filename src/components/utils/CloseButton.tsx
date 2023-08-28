import React from 'react';
import './styles/CloseButton.scss';
import { useModalContext } from '../../context/ModalContext';

export const CloseButton = () => {
  const {  handleCloseModal } = useModalContext();
  return (
    <button
      type="button"
      className="modal__button--close"
      onClick={handleCloseModal}
    >
    X
    </button>
  );
};