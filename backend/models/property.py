from db import get_db

def setup_property_collection():
    db = get_db()
    try:
        db.create_collection("properties", validator={
            "$jsonSchema": {
                "bsonType": "object",
                "required": ["name", "address", "owner", "propertyType", "furnishedType", "allowGenders", "foodType"],
                "properties": {
                    "name": {"bsonType": "string"},
                    "address": {"bsonType": "string"},
                    "price": {"bsonType": "string"},
                    "owner": {
                        "bsonType": "object",
                        "required": ["name", "phone", "gender"],
                        "properties": {
                            "name": {"bsonType": "string"},
                            "phone": {"bsonType": "string"},
                            "gender": {"bsonType": "string"}
                        }
                    },
                    "propertyType": {"bsonType": "string"},
                    "sharingType": {"bsonType": "string"},
                    "furnishedType": {"bsonType": "string"},
                    "allowGenders": {"bsonType": "string"},
                    "foodType": {"bsonType": "string"},
                    "facilities": {
                        "bsonType": "array",
                        "items": {"bsonType": "string"}
                    },
                    "rooms": {
                        "bsonType": "array",
                        "items": {
                            "bsonType": "object",
                            "required": ["seater", "ac", "furnishing", "price"],
                            "properties": {
                                "seater": {"bsonType": "string"},
                                "ac": {"bsonType": "string"},
                                "furnishing": {"bsonType": "string"},
                                "price": {"bsonType": "string"}
                            }
                        }
                    },
                    "description": {"bsonType": "string"},
                    "profilePic": {"bsonType": "string"}
                }
            }
        })
    except Exception as e:
        if "already exists" not in str(e):
            raise e
