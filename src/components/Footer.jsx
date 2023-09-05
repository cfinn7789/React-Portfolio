import { Link, useLocation } from 'react-router-dom';

function Footer() {
  const currentPage = useLocation().pathname;

  return (
    <footer className="footer">
      <div className="contact">
        <h3>Contact Me</h3>
      </div>
        <ul className="contact-info">
            <li><a href="tel:+689-247-7666">689-247-7666</a></li>
            <li><a href="cfinn7789@gmail.com">cfinn7789@gmail.com</a></li>
            <li><a href="https://github.com/cfinn7789">GitHub</a></li>
        </ul>
    </footer>
  );
}

export default Footer;

// Needs to be linked