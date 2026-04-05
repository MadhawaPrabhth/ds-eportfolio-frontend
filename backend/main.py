from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI(title="Dinethri ePortfolio API")

# Allow CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]
    outcome: str
    category: str

class ContactMessage(BaseModel):
    name: str
    email: str
    message: str

# Mock Projects
projects_db = [
    {
        "id": 1,
        "title": "Municipal Solid Waste Management System Assessment",
        "description": "Evaluated the efficiency of current urban waste disposal methods in the Moscow region, proposing sustainable modifications.",
        "technologies": ["Python", "GIS", "Data Analysis", "MS Excel"],
        "outcome": "Presented a 15% more efficient logistics plan for waste collection.",
        "category": "Waste Management"
    },
    {
        "id": 2,
        "title": "Urban Air Quality Monitoring",
        "description": "Conducted a comprehensive 6-month study of particulate matter (PM2.5 and PM10) concentrations in heavy traffic zones.",
        "technologies": ["Environmental Sensors", "MATLAB", "Reporting"],
        "outcome": "Published findings in the university journal highlighting high risk zones.",
        "category": "Environmental Monitoring"
    },
    {
        "id": 3,
        "title": "Industrial Water Pollution Analysis",
        "description": "Collected and tested water samples from industrial rivers to detect heavy metal contamination.",
        "technologies": ["Laboratory Techniques", "Spectrophotometry", "Russian-English Translation"],
        "outcome": "Identified critical pollution markers, providing actionable data for local environmental protection agencies.",
        "category": "Pollution Analysis"
    },
    {
        "id": 4,
        "title": "Sustainable Eco-Campus Development",
        "description": "Led a student-research initiative to design a zero-waste recycling pipeline within the RUDN campus.",
        "technologies": ["Project Management", "Sustainability Modelling"],
        "outcome": "Implementation resulted in a 30% reduction in unrecyclable campus waste over one semester.",
        "category": "Sustainable Development"
    }
]

@app.get("/api/projects", response_model=List[Project])
def get_projects():
    return projects_db

@app.post("/api/contact")
def submit_contact(msg: ContactMessage):
    # Mock saving to DB
    print(f"Received message from {msg.name} ({msg.email}): {msg.message}")
    return {"status": "success", "message": "Your message has been sent successfully!"}

@app.get("/api/health")
def health_check():
    return {"status": "ok"}
