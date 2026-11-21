
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./auth/pages/Loginpage";
import RegisterPage from "./auth/pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
