import React from 'react';

const MobileAppPreview = ({ status }) => {
    if (!status) return null;

    const total = status.total_spots;
    const occupied = status.occupied_count;
    const available = total - occupied;
    const percent = Math.round((occupied / total) * 100);

    return (
        <div className="glass-panel" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="mobile-frame">
                <div className="mobile-notch"></div>
                <div className="mobile-header">
                    <h2 style={{ fontSize: '18px', margin: 0 }}>Smart Campus</h2>
                    <p style={{ fontSize: '12px', margin: 0, color: 'var(--text-muted)' }}>Welcome Back, User</p>
                </div>
                <div className="mobile-content">
                    <div className="mobile-card">
                        <h3 style={{ fontSize: '14px', margin: '0 0 16px', color: 'var(--text-muted)' }}>Current Availability</h3>
                        <div className="slot-circular-progress">
                            <div className="slot-inner">
                                <h3>{available}</h3>
                                <p>SLOTS FREE</p>
                            </div>
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-main)', margin: 0 }}>Campus is {percent}% Full</p>
                    </div>

                    <div className="mobile-card" style={{ background: 'rgba(59, 130, 246, 0.1)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
                        <h3 style={{ fontSize: '14px', margin: '0 0 8px', color: 'var(--accent-blue)' }}>Reserve a spot</h3>
                        <p style={{ fontSize: '12px', margin: '0 0 16px', color: 'var(--text-main)' }}>Pre-book before entering</p>
                        <button style={{ width: '100%', padding: '10px', background: 'var(--accent-blue)', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                            Book Now
                        </button>
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '20px', width: '100%', display: 'flex', justifyContent: 'space-around', padding: '0 20px' }}>
                    {/* Fake bottom nav */}
                    <div style={{ width: '24px', height: '24px', background: 'var(--text-muted)', borderRadius: '4px' }}></div>
                    <div style={{ width: '24px', height: '24px', background: 'var(--accent-blue)', borderRadius: '4px' }}></div>
                    <div style={{ width: '24px', height: '24px', background: 'var(--text-muted)', borderRadius: '4px' }}></div>
                </div>
            </div>
        </div>
    );
};

export default MobileAppPreview;
