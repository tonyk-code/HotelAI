import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import { LoginPage } from "./pages/LoginPage";
import { GuestLayout } from "./components/layout/GuestLayout";
import {Home} from "./pages/guest/Home";
import Explore from "./pages/guest/Explore";
import RoomDetails from "./pages/guest/RoomDetails";
import Services from "./pages/guest/Services";
import Events from "./pages/guest/Events";
import Chat from "./pages/guest/Chat";
import Profile from "./pages/guest/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/app" element={<GuestLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="room/:id" element={<RoomDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="events" element={<Events />} />
        <Route path="chat" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
