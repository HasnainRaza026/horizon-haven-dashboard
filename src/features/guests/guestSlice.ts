import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DropdownId: null,
  deleteGuestId: null,
};

const guestSlice = createSlice({
  name: "guests",
  initialState,
  reducers: {
    setDropdownId: (state, action) => {
      state.DropdownId = action.payload;
    },
    setDeleteGuestId: (state, action) => {
      state.deleteGuestId = action.payload;
    },
  },
});

export const { setDropdownId, setDeleteGuestId } = guestSlice.actions;
export default guestSlice.reducer;
