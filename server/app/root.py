import os
from fastapi import FastAPI, status, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.templating import Jinja2Templates
from fastapi.responses import PlainTextResponse
from fastapi.exceptions import RequestValidationError
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.api.router import api_router
from app.core import API_PREFIX, APP_NAME, APP_VERSION, SQLAlchemyMiddleware, disconnect

app = FastAPI(title=APP_NAME, version=APP_VERSION,
              root_path=os.getenv('ROOT_PATH', ''))

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
app.add_middleware(SQLAlchemyMiddleware)

templates = Jinja2Templates(directory="templates")


@app.on_event("startup")
async def startup():
    print("Running app start handler")


@app.on_event("shutdown")
async def shutdown():
    print("Running app shutdown handler.")
    disconnect()


@app.exception_handler(StarletteHTTPException)
async def http_exception_handler(request: Request, exc: StarletteHTTPException):
    return PlainTextResponse(
        str(exc.detail), status_code=exc.status_code
    )


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(request: Request, exc: RequestValidationError):
    return PlainTextResponse(
        str(exc.detail), status_code=status.HTTP_400_BAD_REQUEST
    )


@app.get("/")
async def read_root() -> dict:
    return templates.TemplateResponse("index.html")

# sub api 연결
app.include_router(api_router, prefix=API_PREFIX)
