from sqlmodel import Field

from app.core import SQLModel


class Code(SQLModel, table=True):
    __tablename__ = "tb_code_m"
    C_ID: str = Field(index=True)
    C_PARENT_ID = Field(index=True)
    C_NAME: str
    C_ENG_NAME: str
    C_DESCRIPTION: str
