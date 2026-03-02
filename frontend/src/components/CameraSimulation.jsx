import React, { useState } from 'react';
import * as api from '../api';

const CameraSimulation = ({ onDetect }) => {
    const [isDetecting, setIsDetecting] = useState(false);
    const [lastPlate, setLastPlate] = useState(null);

    const handleSimulate = async () => {
        setIsDetecting(true);
        setTimeout(async () => {
            const randomNumerics = Math.floor(1000 + Math.random() * 9000);
            const randomPlate = `MH-12-AI-${randomNumerics}`;
            const res = await api.detectCamera(randomPlate);
            setLastPlate(res.plate);
            setIsDetecting(false);
            onDetect(); // Refresh UI
        }, 1500); // Simulate processing time
    };

    return (
        <div className="glass-panel" style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                        <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    AI Camera OCR
                </h3>
                <button className="btn" onClick={handleSimulate} disabled={isDetecting}>
                    {isDetecting ? 'Scanning...' : 'Simulate Entry'}
                </button>
            </div>

            <div className="camera-feed">
                {isDetecting && <div className="scanner-line"></div>}
                <div style={{ position: 'absolute', top: '10px', left: '10px', color: '#0f0', fontFamily: 'monospace', fontSize: '12px' }}>
                    REC ● | {new Date().toLocaleTimeString()}
                </div>

                {lastPlate && !isDetecting && (
                    <div className="plate-overlay">
                        {lastPlate}
                    </div>
                )}

                {!lastPlate && !isDetecting && (
                    <div style={{ color: '#fff', opacity: 0.5 }}>Waiting for vehicle...</div>
                )}
            </div>

            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                <span style={{ color: 'var(--text-muted)' }}>Status: {isDetecting ? 'Processing Frame...' : 'Active'}</span>
                <span style={{ color: 'var(--success)' }}>Model: OpenCV + EasyOCR</span>
            </div>
        </div>
    );
};

export default CameraSimulation;
