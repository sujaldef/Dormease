
from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

def get_db():
    try:
        client = MongoClient(os.getenv("MONGO_URI"))
        # Database name is extracted from MONGO_URI (e.g., 'dormeaseDB')
        db = client.get_database()
        return db
    except Exception as e:
        raise Exception(f"Failed to connect to MongoDB: {str(e)}")
