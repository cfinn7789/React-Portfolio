import { Link, useLocation } from 'react-router-dom';

function Header() {
  const currentPage = useLocation().pathname;

  return (
    <div className="banner-image">
      <h1>Finn</h1>
    </div>
  );
}

export default Header;

// Needs to be linked