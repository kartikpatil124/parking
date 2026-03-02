import React from 'react';

const SlideDemo = () => {
    return (
        <div className="glass-panel" style={{ background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4), rgba(15, 23, 42, 0.9))' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc', marginBottom: '16px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                WHY WE ARE DIFFERENT
            </h3>

            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--text-main)' }}>
                <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid rgba(255, 255, 255, 0.1)', color: 'var(--text-muted)' }}>Normal Parking</th>
                        <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid var(--accent-purple)', color: 'var(--accent-teal)' }}>Our system (Winner Level)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Track only</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 'bold' }}>Predict 🧠</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>Manual decisions</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 'bold' }}>AI decisions 🤖</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>No intelligence</td>
                        <td style={{ padding: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', fontWeight: 'bold' }}>Smart intelligence ⚡</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '12px' }}>Reactive (Panic)</td>
                        <td style={{ padding: '12px', fontWeight: 'bold' }}>Predictive (Calm) 🎯</td>
                    </tr>
                </tbody>
            </table>

            <div style={{ marginTop: '20px', padding: '16px', background: 'rgba(20, 184, 166, 0.1)', borderRadius: '8px', borderLeft: '4px solid var(--accent-teal)' }}>
                <p style={{ margin: 0, fontSize: '14px', fontStyle: 'italic', fontWeight: 'bold' }}>
                    "Our system does not just manage parking, it predicts and prevents parking congestion before it happens."
                </p>
            </div>

            <div style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
                <strong>Target Market:</strong> $20 Billion Smart Parking Market (Smart Cities, Airports, Malls)
            </div>
        </div>
    );
};

export default SlideDemo;
