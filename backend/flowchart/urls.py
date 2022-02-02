from django.contrib import admin
from django.urls import path, re_path
from flows.views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", flowChart, name="flowchart"),
    path("post-data/", SnippetList.as_view(), name="post-data"),
    path(
        "flows/", FlowsSerializerViewSet.as_view({"get": "list"}), name="flows"),
    path("register/", RegisterUser.as_view(), name="flows"),
    re_path(r'^get-final-host-os-data/$', GetFinalHostOSData.as_view(),
            name="GetFinalHostOSData"),
    re_path(r'^get-risk-severity/$', GetRiskSeverityData.as_view(),
            name="GetRiskSeverityData"),
    path('authenticate-user/', LoginUser.as_view(),
         name="authenticate_user"),
    path('get-scanids/', GetScanId.as_view(), name='get_scanids'),
    path('get-all-registered-users/', GetAllUsers.as_view(), name="GetAllUsers"),
    path('scan/', Scan.as_view(), name="Scan"),
    path('get-findings-data/', GetAllIssues.as_view(), name="GetAllIssues"),
    path('send-scan-data/', GetStartScanData.as_view(), name="GetStartScanData"),
    path('send-usecase-data/', PostUseCaseData.as_view(), name="PostUseCaseData"),
    path('critical-assets/', CriticalAssetsData.as_view(),
         name="CriticalAssetsData"),

    path('download-final-hosts/', DownloadFinalHost.as_view(),
         name="DownloadFinalHost"),

    re_path(r'^get-issues-by-name/$', GetIssuesByName.as_view(),
            name="GetIssuesByName")




]
