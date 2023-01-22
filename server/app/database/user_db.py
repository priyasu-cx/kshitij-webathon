from datetime import datetime
from pymongo import MongoClient
from app.config import settings
from app.schemas.user_schema import AllUserSchema, CreateUserSchema, UserDBSchema

cluster = MongoClient(settings.DATABASE_URL)
db = cluster[settings.MONGO_INITDB_DATABASE]
collection = db["users"]

# async def check_user_exists(userID: str):
#     user = collection.find_one({"_id": userID})
#     if user:
#         return True
#     return False


# async def checkin_user(userData: CreateUserSchema):
#     state = await check_user_exists(userData.userID)
#     if not state:
#         user = userData.dict()
#         userID = user.pop("userID")
#         user.update({"created_at": datetime.now(),
#                     "updated_at": datetime.now(), "_id": userID})
#         collection.insert_one(user)
#         return UserDBSchema(**user)


async def get_user_from_db(userID: str):
    user = collection.find_one({"_id": userID})
    if user:
        return UserDBSchema(**user)
    return None


async def register_user(userData: CreateUserSchema):
    user_from_db = await get_user_from_db(userData.userID)
    if not user_from_db:
        user = userData.dict()
        # userID = user.pop("userID")
        user.update({"created_at": datetime.now(),
                    "updated_at": datetime.now(),
                     "_id": userData.userID,
                     })
        collection.insert_one(user)
        print(user)
        return UserDBSchema(**user)


async def all_users_from_db() -> list[AllUserSchema]:
    users = list(collection.find({}))
    if len(users) > 0:
        return [AllUserSchema(**user) for user in users]
    return []
