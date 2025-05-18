import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const getNavLinkClassName = ({ isActive }: { isActive: boolean }) => {
    return `px-4 py-6 inline-block text-xl font-bold ${
      isActive ? 'text-primary' : ''
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white text-center">
      <NavLink to="/" end className={getNavLinkClassName}>
        首頁
      </NavLink>
      <NavLink to="/blog" className={getNavLinkClassName}>
        部落格
      </NavLink>
    </nav>
  );
}
