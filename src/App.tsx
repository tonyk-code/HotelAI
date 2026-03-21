import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
