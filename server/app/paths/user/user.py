from fastapi import APIRouter, HTTPException
from app.database.user_db import all_users_from_db, get_user_from_db, register_user
from app.schemas.user_schema import CreateUserSchema

userRouter = APIRouter(prefix="/api/users", tags=["Users"])


# @userRouter.post('/checkin')
# async def checkin(userData: CreateUserSchema):
#     user = await checkin_user(userData)
#     print(user)
#     if user:
#         return {
#             "status": "success",
#             "user": user,
#         }
#     return {"status": "success", "user": None}


@userRouter.post('/register')
async def register(userData: CreateUserSchema):
    user = await register_user(userData)
    if not user:
        raise HTTPException(status_code=400, detail="User already exists")

    return {
        "status": "success",
        "user": user,
    }


@userRouter.get('/all')
async def get_all_users():
    users = await all_users_from_db()
    if len(users) == 0:
        raise HTTPException(status_code=404, detail="No users found")

    return {
        "status": "success",
        "users": users,
    }


@userRouter.get('/{userID}')
async def get_user(userID: str):
    user = await get_user_from_db(userID)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    return {
        "status": "success",
        "user": user,
    }
