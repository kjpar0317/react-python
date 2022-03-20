import os
from sqlalchemy import create_engine, MetaData
from dotenv import load_dotenv

load_dotenv(verbose=True)

user_name = os.getenv('DB_USER_NAME')
user_pwd = os.getenv('DB_USER_PASSWD')
db_host = os.getenv('DB_HOST')
db_name = os.getenv('DB_NAME')

engine_uri = 'mysql://%s:%s@%s/%s?charset=utf8' % (
    user_name,
    user_pwd,
    db_host,
    db_name,
)

engine = create_engine(engine_uri)

meta = MetaData()

conn = engine.connect()