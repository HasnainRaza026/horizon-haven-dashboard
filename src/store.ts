import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./features/rooms/roomSlice";
import guestReducer from "./features/guests/guestSlice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    guests: guestReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
