import jwt
import datetime
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

def create_token(user):
    payload = {
        'user_id': user.id,
        'login': user.login,
        'nickname': user.nickname,
        'created_at': user.created_at.isoformat(),
        'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),
    }
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return token


def get_decoded_token(token):
    try:
        decoded_token = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
        logger.debug(f"Decoded token: {decoded_token}")
        return decoded_token
    except jwt.ExpiredSignatureError:
        logger.error("Token has expired")
        return None
    except jwt.InvalidTokenError as e:
        logger.error(f"Invalid token: {e}")
        return None


