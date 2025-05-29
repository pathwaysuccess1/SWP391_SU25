import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home-pages"; // Đường dẫn khớp với cấu trúc của bạn

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate-blood" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;