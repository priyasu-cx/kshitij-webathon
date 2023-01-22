from fastapi import APIRouter, HTTPException
from app.database.events_db import all_events_from_db, apply_user_to_event, aprove_user_to_event, delete_event_from_db, get_event_from_db, get_user_events, register_event
from app.database.user_db import get_user_from_db
from app.schemas.events_schema import CreateEventSchema


eventRouter = APIRouter(prefix="/api/events", tags=["Events"])


@eventRouter.post('/create')
async def create_event(eventData: CreateEventSchema):
    event = await register_event(eventData)
    if not event:
        raise HTTPException(status_code=400, detail="Event already exists")

    return {"status": "success", "event": event}


@eventRouter.get('/all')
async def get_all_events():
    events = await all_events_from_db()
    if len(events) == 0:
        raise HTTPException(status_code=404, detail="No events found")

    return {"status": "success", "events": events}


@eventRouter.get('/{eventID}')
async def get_event(eventID: str):
    event = await get_event_from_db(eventID)
    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    return {"status": "success", "event": event}


@eventRouter.post('/{eventID}/apply')
async def apply_event(eventID: str, userID: str):
    event = await get_event_from_db(eventID)
    user = await get_user_from_db(userID)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    if userID == event.authorID:
        raise HTTPException(status_code=400, detail="You are the author")

    if userID in event.approvedUsers:
        raise HTTPException(status_code=400, detail="User already approved")

    if userID in event.appliedUsers:
        raise HTTPException(status_code=400, detail="User already applied")

    state = await apply_user_to_event(event, userID)
    if not state:
        raise HTTPException(status_code=500, detail="Some error occured")
    return {"status": "success"}


@eventRouter.post('/{eventID}/approve')
async def approve_event(eventID: str, userID: str):
    event = await get_event_from_db(eventID)
    user = await get_user_from_db(userID)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    if userID == event.authorID:
        raise HTTPException(status_code=400, detail="You are the author")

    if userID not in event.appliedUsers:
        raise HTTPException(status_code=400, detail="User not applied")

    if userID in event.approvedUsers:
        raise HTTPException(status_code=400, detail="User already approved")

    status = await aprove_user_to_event(event, userID)
    if not status:
        raise HTTPException(status_code=500, detail="Some error occured")
    return {"status": "success"}


@eventRouter.post('/{eventID}/reject')
async def reject_event(eventID: str, userID: str):
    event = await get_event_from_db(eventID)
    user = await get_user_from_db(userID)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    if not event:
        raise HTTPException(status_code=404, detail="Event not found")

    if userID == event.authorID:
        raise HTTPException(status_code=400, detail="You are the author")

    if userID not in event.appliedUsers:
        raise HTTPException(status_code=400, detail="User not applied")

    if userID in event.approvedUsers:
        raise HTTPException(status_code=400, detail="User already approved")

    status = await aprove_user_to_event(event, userID, False)


@eventRouter.post('/{eventID}/delete')
async def delete_event(eventID: str):
    status = await delete_event_from_db(eventID)
    if not status:
        raise HTTPException(status_code=404, detail="Event not found")

    return {"status": "success"}


@eventRouter.get('/me')
async def get_my_events(userID: str):
    user = await get_user_from_db(userID)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    events = await get_user_events(userID)
    if len(events) == 0:
        raise HTTPException(status_code=404, detail="No events found")

    return {"status": "success", "events": events}
