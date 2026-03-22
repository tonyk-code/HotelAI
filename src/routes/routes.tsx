import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Explore } from "./pages/Explore";
import { RoomDetails } from "./pages/RoomDetails";
import { Services } from "./pages/Services";
import { Events } from "./pages/Events";
import { Chat } from "./pages/Chat";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "explore", Component: Explore },
      { path: "room/:id", Component: RoomDetails },
      { path: "services", Component: Services },
      { path: "events", Component: Events },
      { path: "chat", Component: Chat },
      { path: "profile", Component: Profile },
    ],
  },
]);
