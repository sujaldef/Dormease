from db import get_db

def create_property(property_data):
    try:
        db = get_db()
        result = db.properties.insert_one(property_data)
        return db.properties.find_one({"_id": result.inserted_id})
    except Exception as e:
        raise Exception(f"Failed to create property: {str(e)}")

def get_properties():
    try:
        db = get_db()
        properties = list(db.properties.find())
        return properties
    except Exception as e:
        raise Exception(f"Failed to fetch properties: {str(e)}")