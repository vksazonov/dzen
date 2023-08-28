import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  openModal: number | null;
}

const initialState: ModalState = {
  openModal: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<number>) => {
      state.openModal = action.payload;
    },
    handleCloseModal: (state) => {
      state.openModal = null;
    },
  },
});

export const { setOpenModal, handleCloseModal } = modalSlice.actions;
export default modalSlice.reducer;