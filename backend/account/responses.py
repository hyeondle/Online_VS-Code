from ninja import Schema

from .schemas import UserSchema


class LoginResponse(Schema):
    token: str


class UsersResponse(Schema):
    user: UserSchema