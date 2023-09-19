import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation'

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="banner-image">
      <a className="navbar-brand">Finn</a>
        <Navigation />
    </div>
  );
}

export default Header;