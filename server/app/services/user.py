from sqlalchemy import select

from app.core import session
from app.models.user import User


async def check_login_user(user: User) -> bool:
    login_info = (await session.execute(select(User).where(User.id == user.id).where(User.password == user.password))).scalars().first()
    return True if login_info else False
