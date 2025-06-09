import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<h1>Login</h1>} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="bookings" element={<h1>Bookings</h1>}>
            <Route path=":id" element={<h1>Booking ID</h1>} />
          </Route>
          <Route path="rooms" element={<h1>Rooms</h1>} />
          <Route path="guests" element={<h1>Guests</h1>}>
            <Route path=":id" element={<h1>Guest ID</h1>} />
          </Route>
          <Route path="settings" element={<h1>Settings</h1>} />
          <Route path="account" element={<h1>Account</h1>} />
          <Route path="user/add" element={<h1>Add User</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
