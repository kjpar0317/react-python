from typing import Any, List, Tuple
from sqlalchemy import select, and_
from sqlalchemy.sql.selectable import Select

from app.models.grid import RequestGrid


def filter_n_sort_grid(model: Any, grid: RequestGrid) -> Tuple[Select, Select]:
    stmt = select(model)
    stmt_cnt = select(func.count()).select_from(model)
    filters = []

    for key, value in grid.filter_model.items():
        sql_expression = (getattr(model, key).like(f"%{value.filter}%"))
        filters.append(sql_expression)

        if len(filters) > 0:
            stmt = stmt.where(and_(*filters))
            stmt_cnt = stmt_cnt.where(and_(*filters))

        for stm in grid.sort_model:
            model_col = getattr(model, stm.colId)

            stmt = stmt.order_by(
                model_col.asc()) if stm.sort == 'asc' else stmt.order_by(model_col.desc())

        return stmt, stmt_cnt
