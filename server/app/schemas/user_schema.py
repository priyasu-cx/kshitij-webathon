from datetime import datetime
from pydantic import BaseModel



class UserDBSchema(BaseModel):
    userID: str
    name: str
    email: str
    created_at: datetime 
    updated_at: datetime 

    class Config:
        orm_mode = True


class CreateUserSchema(BaseModel):
    userID: str
    name: str
    email: str


class AllUserSchema(BaseModel):
    userID: str
    name: str
    email: str
