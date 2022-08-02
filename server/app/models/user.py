from typing import Optional
from sqlmodel import Field

from app.core import SQLModel


class User(SQLModel, table=True):
    __tablename__ = "users"
    id: str = Field(primary_key=True)
    name: Optional[str]
    password: str
