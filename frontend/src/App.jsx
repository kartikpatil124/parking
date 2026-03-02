import React, { useState, useEffect } from 'react';
import * as api from './api';

// Components
import PredictionCard from './components/PredictionCard';
import RecommendationCard from './components/RecommendationCard';
import CameraSimulation from './components/CameraSimulation';
import ParkingMap from './components/ParkingMap';
import MobileAppPreview from './components/MobileAppPreview';
import WhySlide from './components/WhySlide';

function App() {
  const [status, setStatus] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [recommendation, setRecommendation] = useState(null);

  const fetchData = async () => {
    try {
      const statusData = await api.fetchStatus();
      setStatus(statusData);

      const predData = await api.fetchPrediction();
      setPrediction(predData);

      const recData = await api.fetchRecommendation();
      setRecommendation(recData);
    } catch (e) {
      console.error("Failed to fetch data", e);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 2000); // Polling for fake live update
    return () => clearInterval(interval);
  }, []);

  const handleReset = async () => {
    await api.resetSystem();
    fetchData();
  };

  return (
    <div className="dashboard-grid">
      <div className="header">
        <h1>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12V3h14v9"></path>
            <path d="M5 12v9h14v-9"></path>
            <path d="M12 3v18"></path>
            <path d="M5 12h14"></path>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
          AI-Powered Autonomous Parking Intelligence Platform
        </h1>
        <div className="header-actions">
          <div className="live-badge">
            <span className="dot"></span>
            LIVE SYSTEM
          </div>
          <button onClick={handleReset} className="btn" style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
            🔄 Reset Demo
          </button>
        </div>
      </div>

      <div className="col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
          <PredictionCard prediction={prediction} />
          <RecommendationCard recommendation={recommendation} />
        </div>

        <div style={{ flex: 1 }}>
          <ParkingMap status={status} />
        </div>
      </div>

      <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ height: '350px' }}>
          <CameraSimulation onDetect={fetchData} />
        </div>
        <div style={{ flex: 1, minHeight: '600px' }}>
          <MobileAppPreview status={status} />
        </div>
      </div>

      <div className="col-span-12" style={{ marginTop: '20px' }}>
        <WhySlide />
      </div>

      <div className="col-span-12" style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', padding: '20px 0' }}>
        🚀 Hackathon Winner Edition System Environment
      </div>
    </div>
  );
}

export default App;
