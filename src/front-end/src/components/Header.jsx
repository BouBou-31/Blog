import React from "react";

function Header() {
  return (
    <header>
      <h1>Mon Site</h1>
      <nav class="navigation">
        <a href='#'>Accueil</a>
        <a href='#'>Apprendre</a>
        <a href='#'>A propos</a>
        <button class="btnLogin-popup">Se connecter</button>
      </nav>

    </header>
  );
}

export default Header;