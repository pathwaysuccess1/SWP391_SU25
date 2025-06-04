// Instructions: Thiết lập routing và layout cơ bản cho ứng dụng
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/header.tsx';
import { Footer } from './components/sections/footer.tsx';

// Pages
import Home from './pages/home';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
