from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin

from .managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    id = models.BigAutoField(primary_key=True)
    login = models.CharField(max_length=20, unique=True)
    nickname = models.CharField(max_length=20, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = 'login'

    class Meta:
        indexes = [
            models.Index(fields=['login'], name='login_idx')
        ]
