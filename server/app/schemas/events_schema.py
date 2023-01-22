from datetime import datetime
from pydantic import BaseModel, Field


class EventsDBSchema(BaseModel):
    eventID: str
    authorID: str
    name: str
    description: str
    maxTeamCount: int
    appliedUsers: list[str]
    approvedUsers: list[str]
    closeDate: datetime
    created_at: datetime 
    updated_at: datetime 

    class Config:
        orm_mode = True


class CreateEventSchema(BaseModel):
    authorID: str
    name: str
    description: str
    maxTeamCount: int = Field(ge=1, le=10)
    daysLeft: int = Field(ge=1, le=30)
