import React from 'react';

const PredictionCard = ({ prediction }) => {
    if (!prediction) return <div className="glass-panel">Loading...</div>;

    return (
        <div className="glass-panel" style={{ background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9))' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
                AI Parking Availability Prediction
            </h3>
            <div>
                <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>Probability of Full Congestion</p>
                <div className="prediction-value">{prediction.probability_full}%</div>

                <div className="prediction-message">
                    <strong>Alert:</strong> {prediction.prediction_message}
                </div>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#cbd5e1' }}>
                    <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-purple)' }}></span>
                    Powered by Linear Regression ML Model
                </div>
            </div>
        </div>
    );
}

export default PredictionCard;
