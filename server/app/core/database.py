from contextvars import ContextVar, Token
from typing import AsyncGenerator, Union
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_scoped_session
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.ext.declarative import declarative_base
from sqlmodel import SQLModel

from app.core import config

Base = declarative_base()
SQLModel.metadata = Base.metadata

engine_uri = 'mysql+aiomysql://%s:%s@%s/%s?charset=utf8' % (
    config('DB_USER_NAME'),
    config('DB_USER_PASSWD'),
    config('DB_HOST'),
    config('DB_NAME')
)

session_context: ContextVar[str] = ContextVar("session_context")


def get_session_context() -> str:
    return session_context.get()


def set_session_context(session_id: str) -> Token:
    return session_context.set(session_id)


def reset_session_context(context: Token) -> None:
    session_context.reset(context)


engine = create_async_engine(engine_uri, pool_recycle=3600)


async def disconnect():
    if engine is not None:
        engine.dispose()


class RoutingSession(Session):
    def get_bind(self, mapper=None, clause=None, **kwargs):
        return engine.sync_engine


async_session_factory = sessionmaker(
    bind=engine, class_=AsyncSession, sync_session_class=RoutingSession)

session: Union[AsyncSession, async_scoped_session] = async_scoped_session(
    session_factory=async_session_factory, scopefunc=get_session_context)
