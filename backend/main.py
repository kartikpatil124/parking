from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import time
import random

app = FastAPI(title="AI Parking Intelligence Core")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock state
ZONES = ["A", "B", "C"]
SPOTS = {}

# Initialize spots for visual map
for z in ZONES:
    for i in range(1, 11):
        spot_id = f"{z}{i}"
        SPOTS[spot_id] = {
            "id": spot_id,
            "zone": z,
            "status": "available",
            "distance": i * 5 + (0 if z == "A" else 50 if z == "B" else 100) 
        }

# Pre-fill some spots
for spot_id in ["A1", "A2", "A3", "A5", "B1", "B2", "C1"]:
    SPOTS[spot_id]["status"] = "occupied"

system_start_time = time.time()

class CameraDetectRequest(BaseModel):
    plate_number: str

@app.get("/api/parking/status")
def get_status():
    occupied_count = sum(1 for s in SPOTS.values() if s["status"] == "occupied")
    total_spots = len(SPOTS)
    return {
        "spots": SPOTS,
        "occupied_count": occupied_count,
        "total_spots": total_spots,
    }

@app.get("/api/parking/predict")
def predict_availability():
    # Simulate a dynamic prediction
    elapsed_minutes = (time.time() - system_start_time) / 10 # 10 seconds = 1 minute simulated
    base_probability = 82.0 
    dynamic_prob = min(99.0, base_probability + (elapsed_minutes * 2) + random.uniform(-1, 1))
    
    zone_a_full_time = max(1, int(12 - elapsed_minutes)) 
    
    return {
        "probability_full": round(dynamic_prob, 1),
        "prediction_message": f"Zone A will be FULL in {zone_a_full_time} minutes",
        "trend": "increasing"
    }

@app.get("/api/parking/recommend")
def recommend_slot():
    # Find closest available spot
    available_spots = [s for s in SPOTS.values() if s["status"] == "available"]
    if not available_spots:
        return {"recommended": None, "message": "Campus Parking Full"}
        
    best_spot = min(available_spots, key=lambda x: x["distance"])
    
    return {
        "recommended": best_spot["id"],
        "zone": best_spot["zone"],
        "message": f"Best parking slot: Zone {best_spot['zone']} ({best_spot['id']})"
    }

@app.post("/api/parking/detect")
def detect_camera(req: dict = None):
    plate = req.get("plate_number", "XX-99-AI-0001") if req else "XX-99-AI-0001"
    
    available_spots = [s for s in SPOTS.values() if s["status"] == "available"]
    if not available_spots:
        return {"success": False, "message": "No slots available"}
        
    best_spot = min(available_spots, key=lambda x: x["distance"])
    SPOTS[best_spot["id"]]["status"] = "occupied" 
    
    return {
        "success": True,
        "message": "Vehicle Detected via Camera",
        "plate": plate,
        "assigned_slot": best_spot["id"]
    }

# Reset API for repeatable demos
@app.post("/api/parking/reset")
def reset_demo():
    for z in ZONES:
        for i in range(1, 11):
            spot_id = f"{z}{i}"
            SPOTS[spot_id]["status"] = "available"
    for spot_id in ["A1", "A2", "A3", "A5", "B1", "B2", "C1"]:
        SPOTS[spot_id]["status"] = "occupied"
    global system_start_time
    system_start_time = time.time()
    return {"message": "Demo reset"}
