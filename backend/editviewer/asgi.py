"""
ASGI config for editviewer project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/howto/deployment/asgi/
"""

import os

from channels.routing import ProtocolTypeRouter
from django.core.asgi import get_asgi_application

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'editviewer.settings')
asgi_application = get_asgi_application()

application = ProtocolTypeRouter({
	"http": asgi_application,
	"websocket": AuthMiddlewareStack(
		URLRouter(
			[]
		)
	),
})
