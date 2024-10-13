from ninja import Schema


class LoginRequest(Schema):
    login: str
    password: str


class MakeTestUserRequest(Schema):
    login: str
    password: str


class EditNicknameRequest(Schema):
    nickname: str