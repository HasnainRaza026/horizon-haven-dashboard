import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DropdownId: null,
  deleteBookingId: null,
  bookingStatusId: null,
};

const bookingSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    setDropdownId: (state, action) => {
      state.DropdownId = action.payload;
    },
    setDeleteBookingId: (state, action) => {
      state.deleteBookingId = action.payload;
    },
    setBookingStatusId: (state, action) => {
      state.bookingStatusId = action.payload;
    },
  },
});

export const { setDropdownId, setDeleteBookingId, setBookingStatusId } =
  bookingSlice.actions;
export default bookingSlice.reducer;
