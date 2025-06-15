import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import BookingsPage from "./pages/BookingsPage";
import RoomsPage from "./pages/RoomsPage";
import GuestsPage from "./pages/GuestsPage";
import SettingsPage from "./pages/SettingsPage";
import AccountPage from "./pages/AccountPage";
import AddUserPage from "./pages/AddUserPage";
import BookingDetail from "./features/bookings/BookingDetail";
import GuestDetail from "./features/guests/GuestDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="bookings" element={<BookingsPage />}>
            <Route path=":id" element={<BookingDetail />} />
          </Route>
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="guests" element={<GuestsPage />}>
            <Route path=":id" element={<GuestDetail />} />
          </Route>
          <Route path="settings" element={<SettingsPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="user/add" element={<AddUserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
