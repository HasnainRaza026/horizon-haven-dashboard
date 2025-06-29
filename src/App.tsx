import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const AppLayout = lazy(() => import("./ui/AppLayout"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const BookingsPage = lazy(() => import("./pages/BookingsPage"));
const RoomsPage = lazy(() => import("./pages/RoomsPage"));
const GuestsPage = lazy(() => import("./pages/GuestsPage"));
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const AccountPage = lazy(() => import("./pages/AccountPage"));
const AddUserPage = lazy(() => import("./pages/AddUserPage"));
const BookingDetail = lazy(() => import("./features/bookings/BookingDetail"));
const GuestDetail = lazy(() => import("./features/guests/GuestDetail"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./features/authentication/ProtectedRoute";
import PageSpinner from "./ui/PageSpinner";
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
        <Suspense fallback={<PageSpinner />}>
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
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
