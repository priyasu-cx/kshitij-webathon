from datetime import datetime, timedelta
import random
import string
from pymongo import MongoClient
from app.config import settings
from app.database.team_db import create_team
from app.schemas.events_schema import CreateEventSchema, EventsDBSchema

cluster = MongoClient(settings.DATABASE_URL)
db = cluster[settings.MONGO_INITDB_DATABASE]
collection = db["events"]


async def get_event_from_db(eventID: str):
    event = collection.find_one({"_id": eventID})
    print(event)
    if event:
        return EventsDBSchema(**event)


async def all_events_from_db():
    users = list(collection.find({}))
    if users:
        return [EventsDBSchema(**user) for user in users]
    return []


async def register_event(eventdata: CreateEventSchema):
    eventID = ''.join(random.choice(string.ascii_uppercase) for _ in range(6))
    closeDate = datetime.now() + timedelta(eventdata.daysLeft)
    event_from_db = await get_event_from_db(eventID)
    if not event_from_db:
        event = eventdata.dict()
        # eventdata.maxTeamCount = int(eventdata.maxTeamCount)
        # eventdata.daysLeft = int(eventdata.daysLeft)
        event.pop("daysLeft")
        event.update({"created_at": datetime.now(),
                      "updated_at": datetime.now(),
                      "_id": eventID,
                      "eventID": eventID,
                      "appliedUsers": [],
                      "approvedUsers": [],
                      "closeDate": closeDate,
                      })
        collection.insert_one(event)
        return EventsDBSchema(**event)


async def delete_event_from_db(eventID):
    event = await get_event_from_db(eventID)
    if event:
        collection.delete_one({"_id": eventID})
        return True
    return False


async def apply_user_to_event(event: EventsDBSchema, userID: str):
    try:
        collection.update_one({"_id": event.eventID}, {
            "$push": {"appliedUsers": userID}})
    except:
        return False
    return True


async def remove_event_to_team(event: EventsDBSchema):
    try:
        state = create_team(event)
        if not state:
            return False
        collection.delete_one({"_id": event.eventID})
    except:
        return False
    return True


async def aprove_user_to_event(event: EventsDBSchema, userID: str, approved: bool):
    if approved:
        event.approvedUsers.append(event.appliedUsers.pop(userID))
        event.updated_at = datetime.now()

        if event.approvedUsers.count(userID) == event.maxTeamCount:
            state = await remove_event_to_team(event)
            return state

        try:
            # collection.update_one({"_id": event.eventID}, "$set": {'appliedUsers': event.appliedUsers, 'approvedUsers': event.approvedUsers, 'updated_at': datetime.now()})
            collection.replace_one({"_id": event.eventID}, event.dict())
        except:
            return False
        return True
    else:
        event.appliedUsers.pop(userID)
        event.updated_at = datetime.now()
        try:
            collection.replace_one({"_id": event.eventID}, event.dict())
        except:
            return False
        return True


async def get_user_events(userID):
    events = await all_events_from_db()
    if events:
        userEvents = []
        for event in events:
            if userID in event.appliedUsers or userID in event.approvedUsers or userID == event.authorID:
                userEvents.append(event)
        return userEvents
    return []
