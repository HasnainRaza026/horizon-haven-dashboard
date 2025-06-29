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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 60, // keep in cache 1 hour
        retry: 1,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      {/* For Development Only */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
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
    </QueryClientProvider>
  );
}
