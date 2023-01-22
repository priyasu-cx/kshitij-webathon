from fastapi import HTTPException
from pymongo import MongoClient
from app.config import settings
from app.schemas.events_schema import EventsDBSchema
from app.schemas.team_schema import TeamDBSchema

cluster = MongoClient(settings.DATABASE_URL)
db = cluster[settings.MONGO_INITDB_DATABASE]
collection = db["events"]


async def get_team_from_db(teamID: str):
    team = collection.find_one({"_id": teamID})
    if team:
        return EventsDBSchema(**team)


async def all_teams_from_db():
    teams = list(collection.find({}))
    print(teams)
    if len(teams) > 0:
        return [TeamDBSchema(**team) for team in teams]
    return []


async def create_team(eventData: EventsDBSchema):
    teamID = eventData.eventID + eventData.authorID[:3]
    teamLeadID = eventData.authorID
    teamMembers = [eventData.authorID] + eventData.approvedUsers
    eventName = eventData.eventName
    eventDescription = eventData.eventDescription

    teamData = TeamDBSchema(
        teamID, teamLeadID, teamMembers, eventName, eventDescription)

    team_from_db = await get_team_from_db(teamData.teamID)

    if not team_from_db:
        team = teamData.dict()
        collection.insert_one(team)
        return TeamDBSchema(**team)
