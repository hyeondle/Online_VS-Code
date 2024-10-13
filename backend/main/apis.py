from typing import Dict
from ninja import NinjaAPI, Router
from django.db import IntegrityError
from django.core.exceptions import ValidationError
from django.views.decorators.csrf import csrf_exempt

main_api = Router(tags=["main"])