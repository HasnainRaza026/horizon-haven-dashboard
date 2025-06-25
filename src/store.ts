import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./features/rooms/roomSlice";
import guestReducer from "./features/guests/guestSlice";
import bookingReducer from "./features/bookings/bookingSlice";
import accountReducer from "./features/account/accountSlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    guests: guestReducer,
    bookings: bookingReducer,
    account: accountReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
