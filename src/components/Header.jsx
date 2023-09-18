import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation'

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="banner-image">
      <h1>Finn</h1>
        <Navigation />
    </div>
  );
}

export default Header;

// Needs to be linked