import React from 'react';

const RecommendationCard = ({ recommendation }) => {
    if (!recommendation) return <div className="glass-panel">Loading...</div>;

    return (
        <div className="glass-panel">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Smart Slot Recommendation
            </h3>
            <div style={{ marginTop: '16px' }}>
                <div style={{ background: 'rgba(20, 184, 166, 0.1)', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid rgba(20, 184, 166, 0.3)' }}>
                    <p style={{ color: 'var(--text-muted)' }}>Optimum Parking Slot Found</p>
                    <h2 style={{ fontSize: '32px', color: 'var(--accent-teal)', margin: '10px 0' }}>
                        {recommendation.recommended ? `Zone ${recommendation.zone} - ${recommendation.recommended}` : 'FULL'}
                    </h2>
                    <p style={{ fontSize: '14px', color: 'var(--text-main)' }}>{recommendation.message}</p>
                </div>
                <p style={{ marginTop: '12px', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
                    * Calculated based on current load, distance, and predicted traffic flow.
                </p>
            </div>
        </div>
    );
};

export default RecommendationCard;
