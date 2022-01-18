from django.contrib import admin
from django.urls import path
from flows.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", flowChart, name="flowchart"),
    path("post-data/", SnippetList.as_view(), name="post-data"),
    path("flows", FlowsSerializerViewSet.as_view(
        {"get": "list"}), name="flows"),
    path("add-user-data/", GetUserData.as_view(), name="flows"),
    path("get-final-host-data/", GetFinalHostData.as_view(), name="flows")
]
