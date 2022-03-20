from fastapi import APIRouter, Depends

from app.util.auth_bearer import JWTBearer

test = APIRouter()

@test.get("/api/testApi", tags=["test api"])
async def test_api() -> dict:
    return {"message": "Welcome to your todo list."}
  
@test.post("/api/testJwt", dependencies=[Depends(JWTBearer())], tags=["test jwt"])
async def test_jwt() -> dict:
    return {"message": "JWT is active"}