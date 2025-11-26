import React from 'react';
import { Crown } from 'lucide-react';
import './Card.css';

const Card = ({ deity, onClick }) => {
  const {
    name,
    power,
    elements,
    archetype,
    lore,
    image
  } = deity;

  const [imgError, setImgError] = React.useState(false);
  const showPlaceholder = imgError || image.includes('placeholder');

  const getPowerColor = (p) => {
    if (p === 100) return "power-100";
    if (p >= 95) return "power-95";
    if (p >= 90) return "power-90";
    return "power-base";
  };

  const getBorderColor = (p) => {
    if (p === 100) return "border-100";
    if (p >= 95) return "border-95";
    return "border-base";
  };

  return (
    <div
      className={`card-container ${getBorderColor(power)}`}
      onClick={onClick}
    >
      {/* Full Background Image */}
      <div className="card-image-full">
        {showPlaceholder ? (
          <div className="card-image-placeholder">
            <span className="placeholder-text">{name}</span>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="card-image"
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Floating Power Badge */}
      <div className="card-power-badge">
        <span className={`power-value ${getPowerColor(power)}`}>{power}</span>
        <span className="power-label">PWR</span>
      </div>

      {/* Gradient Overlay & Content */}
      <div className="card-overlay">
        <div className="card-header">
          <div className="card-top-row">
            <h2 className="card-name">{name}</h2>
            <Crown size={18} className="card-icon" />
          </div>
          <div className="card-elements">
            {elements.map((el, idx) => (
              <span key={idx} className="element-badge">
                {el}
              </span>
            ))}
          </div>
        </div>

        <div className="card-details">
          <div className="card-archetype">
            <p>{archetype}</p>
          </div>
          <div className="card-lore">
            <p>"{lore}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
