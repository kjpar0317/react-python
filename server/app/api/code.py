from fastapi import APIRouter
from typing import List

from app.config.database import conn
from app.model.code import codes
from app.schema.code import Code

code = APIRouter()

@code.get(
    "/codes",
    tags=["codes"],
    response_model=List[Code],
    description="Get a list of all codes",
)
def get_codes():
    return conn.execute(codes.select()).fetchall()