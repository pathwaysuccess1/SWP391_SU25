// Instructions: Thiết lập routing và layout cơ bản cho ứng dụng
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/header.tsx';
import { Footer } from './components/sections/footer.tsx';

// Pages
import Home from './pages/home';
import BlogPage from "./pages/blogs/blogPage.tsx";
// Import các trang khác nếu có
// import Contact from './pages/contact';
// import NeedBloodDonate from './pages/need-blood-donate';

function App() {
  return (
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogPage />} />
              {/* Thêm các route khác khi có trang tương ứng */}
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/need-blood-donate" element={<NeedBloodDonate />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;