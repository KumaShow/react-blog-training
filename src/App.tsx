import { Routes, Route } from 'react-router-dom'
import '@/assets/App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog/Blog'

function App() {
  return (
    <div className=''>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
