from django.urls import path, re_path
from .views import *

urlpatterns = [
    path("flowchart/", FlowChart.as_view(), name="flows"),
    path("register/", RegisterUser.as_view(), name="RegisterUser"),
    path('login/', LoginUser.as_view(), name="LoginUser"),
    path('scans/', Scans.as_view(), name='Scans'),
    path('users/', Users.as_view(), name="Users"),
    path('scan/', Scan.as_view(), name="Scan"),
    path('findings/', Findings.as_view(), name="Findings"),
    path('usecase/', PostUseCaseData.as_view(), name="PostUseCaseData"),
    path('critical-assets/', CriticalAsset.as_view(), name="CriticalAsset"),
    path('download/', Download.as_view(), name="Download"),
    path('administration/', Administration.as_view(), name="Administration"),
    path('spray/', Spray.as_view(), name="Spray"),
    path('greybox/', Greybox.as_view(), name="Greybox"),
    path('progress/', Progress.as_view(), name="Progress"),

    re_path(r'^get-final-host-os-data/$', GetFinalHostOSData.as_view(),
            name="GetFinalHostOSData"),
    re_path(r'^get-risk-severity/$', GetRiskSeverityData.as_view(),
            name="GetRiskSeverityData"),
    re_path(r'^get-issues-by-name/$', GetIssuesByName.as_view(),
            name="GetIssuesByName"),
]
