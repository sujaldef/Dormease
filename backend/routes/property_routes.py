from fastapi import APIRouter, HTTPException
from services.property_service import create_property, get_properties

router = APIRouter()

@router.post("/")
async def add_property(property_data: dict):
    try:
        property = create_property(property_data)
        property["_id"] = str(property["_id"])
        return {"message": "Property added successfully!", "property": property}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/")
async def fetch_properties():
    try:
        properties = get_properties()
        # Convert ObjectId to string for JSON serialization
        for property in properties:
            property["_id"] = str(property["_id"])
        return {"properties": properties}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))