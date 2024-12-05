import React from 'react';
import './SaveTheSea.css';

const SaveTheSea: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Sauvez la Mer</h1>
        <nav>
          <a href="#accueil">Accueil</a>
          <a href="#a-propos">À propos</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <h2>Bienvenue sur notre site pour sauver la mer</h2>
        <p>
          La mer est en danger. Les déchets plastiques, la pollution et la surpêche menacent la biodiversité marine. Rejoignez-nous pour agir et protéger notre océan.
        </p>
        <button>Rejoignez-nous</button>
      </main>
      <footer>
        <p>&copy; 2024 Sauvez la Mer. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default SaveTheSea;
