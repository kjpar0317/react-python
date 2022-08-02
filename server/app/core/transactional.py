from app.core import session


class Propagation:
    REQUIRED = "required"
    REQUIRED_NEW = "required_new"


class Transactional:
    def __init__(self, propagation=Propagation.REQUIRED):
        self.propagation = propagation

    def __call__(self, function):
        @wraps(function)
        async def decorator(*args, **kwargs):
            try:
                result = await function(*args, **kwargs)
                await session.commit()
            except Exception as e:
                await session.rollback()
                raise e

        return decorator
