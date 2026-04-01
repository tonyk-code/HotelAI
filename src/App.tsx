import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { GuestLayout } from "./components/layout/GuestLayout";
import { Home } from "./pages/guest/Home";
import { Explore } from "./pages/guest/Explore";
import { RoomDetails } from "./pages/guest/RoomDetails";
import { Services } from "./pages/guest/Services";
import { Events } from "./pages/guest/Events";
import { Chat } from "./pages/guest/Chat";
import { Profile } from "./pages/guest/Profile";
import ManagerLayout from "./pages/admin/ManagerLayout";
import { Dashboard } from "./pages/admin/Dashboard";
import Tasks from "./pages/admin/Tasks";
import Bookings from "./pages/admin/Bookings";
import Inventory from "./pages/admin/Inventory";
import Revenue from "./pages/admin/Revenue";
import Feedback from "./pages/admin/Feedback";
import Reports from "./pages/admin/Reports";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import AIPendingRequests from "./pages/admin/AIPendingRequests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute allowedRole="guest" />}>
        <Route path="/app" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/:id" element={<RoomDetails />} />
          <Route path="services" element={<Services />} />
          <Route path="events" element={<Events />} />
          <Route path="chat" element={<Chat />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
      <Route element={<ProtectedRoute allowedRole="manager" />}>
        <Route path="/manager" element={<ManagerLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="revenue" element={<Revenue />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="reports" element={<Reports />} />
          <Route path="ai-requests" element={<AIPendingRequests />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
