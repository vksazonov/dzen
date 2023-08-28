import React, { createContext, useContext, useState } from 'react';

interface ModalContextProps {
  openModal: number | null;
  handleOpenModal: (id: number) => void;
  handleCloseModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [openModal, setOpenModal] = useState<number | null>(null);

  const handleOpenModal = (productId: number) => {
    setOpenModal(productId);
  };

  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, handleOpenModal, handleCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};