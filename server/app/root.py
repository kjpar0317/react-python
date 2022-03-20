from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.responses import JSONResponse

from .exceptions import AuthException

from app.api.test import test
from app.api.login import login
from app.api.user import user
from app.api.code import code

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

templates = Jinja2Templates(directory="templates")

@app.exception_handler(AuthException)
async def unicorn_exception_handler(request: Request, exc: AuthException):
    return JSONResponse(
        status_code=418,
        content={"message": f"Oops! {exc.name} did something. There goes a rainbow..."},
    )
  
@app.get("/")
async def read_root() -> dict:
    return templates.TemplateResponse("index.html")

# sub api 연결
app.include_router(test)
app.include_router(login)
app.include_router(user)
app.include_router(code)