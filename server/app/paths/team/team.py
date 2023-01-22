from fastapi import APIRouter, HTTPException

from app.database.team_db import all_teams_from_db

teamRouter = APIRouter(prefix="/api/teams", tags=["Teams"])


@teamRouter.get('/')
async def get_all_teams():
    teams = await all_teams_from_db()
    if len(teams) == 0:
        raise HTTPException(status_code=404, detail="No teams found")

    return {"status": "success", "teams": teams}
