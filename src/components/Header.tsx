import { useState } from "react";
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeToggle() {
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode);
  }

  return (
    <header>
      <div className="container header-content">
        <img
          className="profile-image"
          src="/profile.jpg"
          alt="Portrait of Hamed Razizadeh"
        />

        <div className="header-text">
          <h1>Hamed Razizadeh</h1>
          <p>Frontend Developer Student</p>

          <nav>
            <ul className="nav-list">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#interests">Interests</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <button
          className="theme-toggle"
          type="button"
          onClick={handleThemeToggle}
        >
          {isDarkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </header>
  );
}

export default Header;
