from sqlalchemy import Column, Table, String
from app.config.database import meta, engine

codes = Table(
    "tb_code_m",
    meta,
    Column("C_ID", String(10), index=True),
    Column("C_PARENT_ID", String(10), index=True),
    Column("C_NAME", String(100)),
    Column("C_ENG_NAME", String(100)),
    Column("C_DESCRIPTION", String(1000)),
)

meta.create_all(engine)