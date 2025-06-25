import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUpdateModalOpen: false,
  isUpdatePasswordModalOpen: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setIsUpdateModalOpen: (state, action) => {
      state.isUpdateModalOpen = action.payload;
    },
    setIsUpdatePasswordModalOpen: (state, action) => {
      state.isUpdatePasswordModalOpen = action.payload;
    },
  },
});

export const { setIsUpdateModalOpen, setIsUpdatePasswordModalOpen } =
  accountSlice.actions;
export default accountSlice.reducer;
