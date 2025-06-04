// Instructions: Thiết lập routing và layout cơ bản cho ứng dụng

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/sections/header";
import { Footer } from "./components/sections/footer";

// Pages
import Home from "./pages/home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/profile";
import MapPage from "./pages/Map";
// Forms
import DonorRegisterForm from "./forms/DonorRegisterForm";
import RequestBloodForm from "./forms/RequestBloodForm";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/donate" element={<DonorRegisterForm />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/need-blood" element={<RequestBloodForm />} />
            <Route path="/map" element={<MapPage />} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
