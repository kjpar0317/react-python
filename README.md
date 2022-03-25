# react-python

리액트-파이썬

## client : React(TS) + Jotai + Vite + TailwindCSS + Daisyui

# client 패키지 설치

npm install

## server : Python + Poetry + FastAPI + sqlAlchemy

# server 패키지 설치

# Poetry 설치
윈도우 파워셀에서 (Invoke-WebRequest -Uri https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py -UseBasicParsing).Content | python -

# Poetry 가상환경 폴더 변경
백앤드폴더에 .venv 폴더 생성 밑에 명령으로 가상환경 선택<br/>
poetry config virtualenvs.in-project true<br/>
poetry config virtualenvs.path "./.venv"

# Poetry 패키지 설치
poetry install

# Poetry 패키지 추가 (새로운 거 추가 시)
예) poetry add fastapi

# Python 실행
poetry run python main.py

# 기타 참고

tailwindcss<br/>
https://tailwindcss.com/docs/aspect-ratio<br/>
https://tailwindcomponents.com/<br/>
https://play.tailwindcss.com/

아이콘
https://heroicons.com/