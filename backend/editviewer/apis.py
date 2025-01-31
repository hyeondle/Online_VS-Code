from ninja import NinjaAPI

from account.apis import account_api
from main.apis import main_api

api = NinjaAPI()

api.add_router("/account/", account_api)
api.add_router("/main/", main_api)
