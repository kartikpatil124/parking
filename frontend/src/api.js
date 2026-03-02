const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/parking';

export const fetchStatus = async () => {
    const res = await fetch(`${API_BASE}/status`);
    return res.json();
};

export const fetchPrediction = async () => {
    const res = await fetch(`${API_BASE}/predict`);
    return res.json();
};

export const fetchRecommendation = async () => {
    const res = await fetch(`${API_BASE}/recommend`);
    return res.json();
};

export const detectCamera = async (plate_number) => {
    const res = await fetch(`${API_BASE}/detect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plate_number })
    });
    return res.json();
};

export const resetSystem = async () => {
    const res = await fetch(`${API_BASE}/reset`, { method: 'POST' });
    return res.json();
};
