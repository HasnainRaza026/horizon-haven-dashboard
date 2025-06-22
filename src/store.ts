import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./features/rooms/roomSlice";
import guestReducer from "./features/guests/guestSlice";
import bookingReducer from "./features/bookings/bookingSlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    guests: guestReducer,
    bookings: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
