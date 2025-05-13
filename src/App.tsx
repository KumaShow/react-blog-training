import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/assets/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog/Blog'

function App() {
  useEffect(() => {
    AOS.init();
  }, []); // 空陣列表示只在元件掛載時執行一次

  return (
    <div className=''>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App
