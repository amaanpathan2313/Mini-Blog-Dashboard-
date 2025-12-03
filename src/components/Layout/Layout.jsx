
import './Layout.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../hooks/useTheme';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`layout ${theme}`}>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              Mini Blog
            </Link>
            <nav className="nav">
              <Link to="/" className="nav-link">Posts</Link>
              <Link to="/create" className="nav-link">Create Post</Link>
            </nav>
            <button onClick={toggleTheme} className="theme-btn">
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">{children}</div>
      </main>

      <footer className="footer">
        <div className="container">
          <p> Created by Amaan Pathan </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
