import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddModalOpen: false,
  dropdownId: null,
  editRoomId: null,
  deleteRoomId: null,
};

const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {
    setDropdownId: (state, action) => {
      state.dropdownId = action.payload;
    },
    setIsAddModalOpen: (state, action) => {
      state.isAddModalOpen = action.payload;
    },
    setEditRoomId: (state, action) => {
      state.editRoomId = action.payload;
    },
    setDeleteRoomId: (state, action) => {
      state.deleteRoomId = action.payload;
    },
  },
});

export const {
  setDropdownId,
  setIsAddModalOpen,
  setEditRoomId,
  setDeleteRoomId,
} = roomSlice.actions;
export default roomSlice.reducer;
