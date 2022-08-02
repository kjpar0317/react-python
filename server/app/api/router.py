from fastapi import APIRouter

from app.api import test, user

api_router = APIRouter()

api_router.include_router(
    test.router, prefix="/test", tags=["테스트"])
api_router.include_router(
    user.router, prefix="/user", tags=["사용자"])
# api_router.include_router(code.router, prefix="/code", tags=["코드"])
