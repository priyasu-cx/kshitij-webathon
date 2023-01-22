from datetime import datetime
from pydantic import BaseModel, EmailStr


class UserDBSchema(BaseModel):
    userID: str
    name: str
    email: EmailStr
    created_at: datetime | None = None
    updated_at: datetime | None = None

    class Config:
        orm_mode = True


class CreateUserSchema(BaseModel):
    userID: str
    name: str
    email: EmailStr


class AllUserSchema(BaseModel):
    userID: str
    name: str
    email: EmailStr
