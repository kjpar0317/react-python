from fastapi import APIRouter, Depends

from app.utils.auth_bearer import JWTBearer

router = APIRouter()


@router.get("/testApi", tags=["test api"])
async def test_api() -> dict:
    return {"message": "Welcome to your todo list."}


@router.post("/testJwt", dependencies=[Depends(JWTBearer())], tags=["test jwt"])
async def test_jwt() -> dict:
    return {"message": "JWT is active"}
