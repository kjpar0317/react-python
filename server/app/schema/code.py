from pydantic import BaseModel, Field
from typing import Optional

class Code(BaseModel):
    C_ID: Optional[str] = Field(...)
    C_PARENT_ID: Optional[str] = Field(...)
    C_NAME: Optional[str] = Field(...)
    C_ENG_NAME: Optional[str] = Field(...)
    C_DESCRIPTION: Optional[str] = Field(...)
    
    class Config:
      schema_extra = {
        "example": {
            "C_ID": "코드",
            "C_PARENT_ID": "부모 코드",
            "C_NAME": "이름",
            "C_ENG_NAME": "영어 이름",
            "C_DESCRIPTION": "설명"
        }
    }

class CodeCount(BaseModel):
    total: int