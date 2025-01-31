from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import authenticate as django_authenticate
from django.contrib.auth import login
from ninja.security import HttpBearer

from .models import User
from main.jwt import get_decoded_token


class CustomBackend(ModelBackend):
    def authenticate(self, request, login=None, password=None, **kwargs):
        try:
            user = self.get_user(login)
            # 사용자 존재 여부 및 비밀번호 검증
            if user and user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None

    def get_user(self, login):
        try:
            return User.objects.get(login=login)
        except User.DoesNotExist:
            return None


class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        if decoded_token := get_decoded_token(token):
            try:
                user = User.objects.get(login=decoded_token['login'])
                return user
            except User.DoesNotExist:
                return None
        return None

