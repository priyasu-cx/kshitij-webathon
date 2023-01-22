from pydantic import BaseModel, Field
from typing import List


class TeamDBSchema(BaseModel):
    teamID: str
    teamName: str
    teamDescription: str
    teamLeadID: str
    teamMembers: List[str] = Field(min_length=1, max_length=10)
