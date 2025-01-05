import React from "react";

function Header({ onLoginClick }) {
  return (
    <header>
      <h1>Mon Site</h1>
      <nav className="navigation">
        <a href='#'>Accueil</a>
        <a href='#'>Apprendre</a>
        <a href='#'>A propos</a>
        <button className="btnLogin-popup" onClick={onLoginClick}>Se connecter</button>
      </nav>

    </header>
  );
}

export default Header;