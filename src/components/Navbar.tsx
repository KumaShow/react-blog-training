import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className=" text-center">
      <NavLink
        to="/"
        end
        className={({ isActive }: { isActive: boolean }) =>
          `px-4 py-6 inline-block text-xl font-bold ${isActive ? " text-primary border-b border-primary" : ""}`
        }
      >
        首頁
      </NavLink>
      <NavLink className={({ isActive }: { isActive: boolean }) => `px-4 py-6 inline-block text-xl font-bold ${isActive ? " text-primary border-b border-primary" : ""}`} to="/blog">
        部落格
      </NavLink>
    </nav>
  )
}