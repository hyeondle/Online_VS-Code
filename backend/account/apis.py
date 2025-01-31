import os
# import logging
import requests
from pathlib import Path
from ninja import Router
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.http import HttpResponse
from django.db import IntegrityError

from .models import User
from .requests import LoginRequest, MakeTestUserRequest
from .responses import LoginResponse, UsersResponse
from .schemas import UserSchema
from .auth import AuthBearer
from main.jwt import create_token

account_api = Router(tags=["account"])

# 사용자 작업 디렉토리 베이스 경로
WORKSPACE_BASE_DIR = os.getenv('WORKSPACE_BASE_DIR')

# logger = logging.getLogger(__name__)

# 회원가입 API
@account_api.post("/register", response={201: UsersResponse, 400: str})
def register(request, payload: MakeTestUserRequest):
    if User.objects.filter(login=payload.login).exists():
        return 400, "User with this login already exists."

    try:
        user = User(
            login=payload.login,
            nickname=payload.login,
            password=make_password(payload.password)
        )
        user.full_clean()
        user.save()

        return 201, {"user": UserSchema.from_orm(user)}
    except ValidationError as e:
        return 400, f"Validation Error: {e.messages}"
    except IntegrityError:
        return 400, "User registration failed due to a database error."


# 로그인 API
@account_api.post("/login", response={200: LoginResponse, 401: str})
def login(request, payload: LoginRequest):
    # 사용자 인증
    user = authenticate(request, login=payload.login, password=payload.password)

    if user:
        # Django 세션 로그인 처리
        auth_login(request, user)
        # JWT 토큰 생성
        token = create_token(user)
        # 토큰을 클라이언트에 반환
        return 200, {"token": token}
    # 인증 실패 시 401 에러 반환
    return 401, "Invalid credentials"


# 워크스페이스 URL 조회 API
@account_api.get("/workspace-url", auth=AuthBearer())
def get_workspace_url(request):
    user = request.auth
    if not user:
        return HttpResponse("Unauthorized", status=401)

    # Flask 서버로 유저 ID를 전달하여 워크스페이스 확인
    flask_api_url = f"http://code-server:5000/return-workspace?user_id={user.id}"
    try:
        response = requests.get(flask_api_url)
        response_data = response.json()

        if response.status_code == 200:
            workspace_url = response_data.get('workspace')
            return HttpResponse(workspace_url, content_type="text/plain")
        else:
            return HttpResponse(f"Error: {response_data.get('error')}", status=response.status_code)

    except requests.RequestException as e:
        return HttpResponse(f"Flask API request failed: {str(e)}", status=500)

# user_id 반환 API
@account_api.get("/user-id", auth=AuthBearer())
def get_user_id(request):
    user = request.auth
    if not user:
        return HttpResponse("Unauthorized", status=401)

    return HttpResponse(f"{user.id}", content_type="text/plain")

# 유저 정보 조회 API
@account_api.get("/me", auth=AuthBearer(), response=UsersResponse)
def get_profile(request):
    return {"user": UserSchema.from_orm(request.auth)}

# 엔트리 키 확인 API
@account_api.get("/check-entry-key")
def check_entry_key(request):
    user_input = request.GET.get('entry_key')
    entry_key = os.getenv('ENTRY_KEY')  # 서버 환경변수에서 가져옴

    if user_input == entry_key:
        return JsonResponse({"status": "success"}, status=200)
    else:
        return JsonResponse({"status": "failed"}, status=400)