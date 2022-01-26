from django.contrib import admin
from django.urls import path, re_path
from flows.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", flowChart, name="flowchart"),
    path("post-data/", SnippetList.as_view(), name="post-data"),
    path("flows", FlowsSerializerViewSet.as_view(
        {"get": "list"}), name="flows"),
    path("register-user-data/", RegisterUser.as_view(), name="flows"),
    path("get-final-host-data/", GetFinalHostOSData.as_view(), name="flows"),
    path('authenticate-user/', LoginUser.as_view(),
         name="authenticate_user"),
    path('get-scanids/', GetScanId.as_view(), name='get_scanids'),


]
