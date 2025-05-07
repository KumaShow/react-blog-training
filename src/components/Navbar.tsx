import { Link} from "react-router-dom"

export default function Navbar () {
  return (
    <nav className=" text-center">
      <Link className="px-4 py-6 inline-block" to="/">首頁</Link>
      <Link className="px-4 py-6 inline-block" to="/blog">部落格</Link>
    </nav>
  )
}