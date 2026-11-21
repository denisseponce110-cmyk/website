import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink className="brand" to="/">DENISSE PONCE</NavLink>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/headshots">Headshots</NavLink></li>
          <li><NavLink to="/acting">Acting</NavLink></li>
          <li><NavLink to="/dancing">Dancing</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
