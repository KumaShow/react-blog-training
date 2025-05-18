import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Home from './pages/Home'
import Blog from './pages/Blog/BlogIndex'
import BlogDetail from './pages/Blog/BlogDetail';

function App() {
  useEffect(() => {
    AOS.init();
  }, []); // 空陣列表示只在元件掛載時執行一次

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogDetail />} />
      </Routes>

      <ScrollTop />
      <Footer />
    </div>
  )
}

export default App
