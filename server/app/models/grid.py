from pydantic import BaseModel
from typing import Dict, List, Any


class GridFilterModel(BaseModel):
    filterType: str
    type: str
    filter: str


class GridSortModel(BaseModel):
    sort: str
    colId: str


class RequestGrid(BaseModel):
    start: int
    end: int
    filter_model: Dict[str, GridFilterModel]
    sort_model: List[GridSortModel]


class ResponseGrid(BaseModel):
    list: List[Any]
    total_cnt: int
