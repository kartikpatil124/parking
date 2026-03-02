import React from 'react';

const ParkingMap = ({ status }) => {
    if (!status || !status.spots) return <div className="glass-panel">Loading Map...</div>;

    const spots = Object.values(status.spots);
    const zones = ['A', 'B', 'C'];

    return (
        <div className="glass-panel" style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    Live Visual Parking Map
                </h3>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                        <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid var(--success)' }}></span>
                        Available
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}>
                        <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '4px', background: 'rgba(239, 68, 68, 0.2)', border: '1px solid var(--danger)' }}></span>
                        Occupied
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                {zones.map(zone => {
                    const zoneSpots = spots.filter(s => s.zone === zone);
                    const occupied = zoneSpots.filter(s => s.status === 'occupied').length;

                    return (
                        <div key={zone} style={{ marginBottom: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px', color: 'var(--text-muted)' }}>
                                <span>Zone {zone}</span>
                                <span>{zoneSpots.length - occupied} empty / {zoneSpots.length} total</span>
                            </div>
                            <div className="map-grid">
                                {zoneSpots.map(spot => (
                                    <div key={spot.id} className={`spot ${spot.status}`}>
                                        {spot.status === 'occupied' && <span className="spot-car-icon">🚗</span>}
                                        {spot.id}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ParkingMap;
