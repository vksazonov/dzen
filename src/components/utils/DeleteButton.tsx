import React, { FC } from 'react';
import './styles/DeleteButton.scss';

interface Props {
  handleOpenModal: (id: number) => void;
  prodId: number;
}

export const DeleteButton: FC<Props> = ({handleOpenModal, prodId}) => {
  return (
    <div className="delete">
      <button 
        className="delete-button"
        onClick={() => handleOpenModal(prodId)}
      >
        <img src='./images/bucket.svg' alt="bucket" className='delete-icon' />
      </button>
    </div> 
  );
};