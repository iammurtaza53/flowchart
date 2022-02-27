from xml.etree.ElementInclude import include
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.static import serve
from django.conf import settings
from django.views.generic import TemplateView
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token


urlpatterns = [
    path("", TemplateView.as_view(template_name="flows/index.html")),
    path("admin/", admin.site.urls),
    path("flowchart/", include('flows.urls')),
    path(r'user/api-token-auth/', obtain_jwt_token),    
    re_path(r'^js/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT_JS,
            }),
    re_path(r'^css/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT_CSS,
    }),
]
