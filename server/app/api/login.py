

from fastapi import APIRouter, Body

from app.schema.login import Login
from app.util.auth_handler import signJWT

login = APIRouter()

def check_user(data: Login):
  test = {
    'email': 'test@test.com',
    'password': 'test'
  }
  
  if test['email'] == data.email and test['password'] == data.password:
    return True
  else:
    return False
  
@login.post("/api/login", tags=["login"])
async def user_login(user: Login = Body(...)):
    if check_user(user):
        return signJWT(user.email)
    return {
        "error": "Wrong login details!"
    }