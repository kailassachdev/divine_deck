import React, { useEffect } from 'react';
import { X, Crown } from 'lucide-react';
import './CardModal.css';

const CardModal = ({ deity, onClose }) => {
    if (!deity) return null;

    const {
        name,
        power,
        elements,
        archetype,
        lore,
        image
    } = deity;

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const getPowerColor = (p) => {
        if (p === 100) return "modal-power-100";
        if (p >= 95) return "modal-power-95";
        if (p >= 90) return "modal-power-90";
        return "modal-power-base";
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <X size={24} />
                </button>

                <div className="modal-grid">
                    {/* Image Section */}
                    <div className="modal-image-section">
                        <div className="modal-image-wrapper">
                            {image.includes('placeholder') ? (
                                <div className="modal-placeholder">
                                    <span>{name}</span>
                                </div>
                            ) : (
                                <img src={image} alt={name} className="modal-image" />
                            )}
                        </div>

                        <div className="modal-power-display">
                            <span className="modal-power-label">POWER LEVEL</span>
                            <span className={`modal-power-value ${getPowerColor(power)}`}>{power}</span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="modal-details">
                        <div className="modal-header">
                            <h2 className="modal-title">{name}</h2>
                            <div className="modal-archetype">
                                <Crown size={16} className="text-amber-500" />
                                <span>{archetype}</span>
                            </div>
                        </div>

                        <div className="modal-elements">
                            {elements.map((el, idx) => (
                                <span key={idx} className="modal-element-badge">
                                    {el}
                                </span>
                            ))}
                        </div>

                        <div className="modal-lore-container">
                            <h3 className="modal-section-title">Lore & Origins</h3>
                            <p className="modal-lore-text">{lore}</p>
                        </div>

                        <div className="modal-footer">
                            <div className="modal-stat-row">
                                <span>Status</span>
                                <span className="text-gold">Divine Entity</span>
                            </div>
                            <div className="modal-stat-row">
                                <span>Origin</span>
                                <span className="text-gold">Vedic / Puranic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardModal;
