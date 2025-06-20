import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddModalOpen: false,
  isEditModalOpen: false,
  editRoomId: null,
  isDeleteModalOpen: false,
  deleteRoomId: null,
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setIsAddModalOpen: (state, action) => {
      state.isAddModalOpen = action.payload;
    },
    setIsEditModalOpen: (state, action) => {
      state.isEditModalOpen = action.payload;
    },
    setEditRoomId: (state, action) => {
      state.editRoomId = action.payload;
    },
    setIsDeleteModalOpen: (state, action) => {
      state.isDeleteModalOpen = action.payload;
    },
    setDeleteRoomId: (state, action) => {
      state.deleteRoomId = action.payload;
    },
  },
});

export const {
  setIsAddModalOpen,
  setIsEditModalOpen,
  setIsDeleteModalOpen,
  setEditRoomId,
  setDeleteRoomId,
} = roomSlice.actions;
export default roomSlice.reducer;
