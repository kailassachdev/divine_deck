import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import CardModal from './components/CardModal';
import { deities } from './data/deities';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="app-container">
      <header className="gallery-header">
        <h1>Divine Deck</h1>
        <p style={{ color: 'var(--color-gold)', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Pantheon of the Ancients
        </p>
      </header>

      <div className="card-grid">
        {deities.map(deity => (
          <Card
            key={deity.id}
            deity={deity}
            onClick={() => setSelectedCard(deity)}
          />
        ))}
      </div>

      {selectedCard && (
        <CardModal
          deity={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  );
}

export default App;
