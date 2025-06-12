import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Guests from "./pages/Guests";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import AddUser from "./pages/AddUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />}>
            <Route path=":id" element={<h1>Booking ID</h1>} />
          </Route>
          <Route path="rooms" element={<Rooms />} />
          <Route path="guests" element={<Guests />}>
            <Route path=":id" element={<h1>Guest ID</h1>} />
          </Route>
          <Route path="settings" element={<Settings />} />
          <Route path="account" element={<Account />} />
          <Route path="user/add" element={<AddUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
