import React from "react";

const LoginPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Connexion</h2>
        <form>
          <label>
            Nom d'utilisateur :
            <input type="text" name="username" />
          </label>
          <label>
            Mot de passe :
            <input type="password" name="password" />
          </label>
          <button type="submit">Se connecter</button>
        </form>
        <button className="close-btn" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
};

export default LoginPopup;
