from django.urls import path, re_path
from .views import *

urlpatterns = [
    path("register/", RegisterUser.as_view(), name="RegisterUser"),
    path('login/', LoginUser.as_view(), name="LoginUser"),
    path('scans/', Scans.as_view(), name='Scans'),
    path('users/', Users.as_view(), name="Users"),
    path('scan/', Scan.as_view(), name="Scan"),
    path('usecase/', PostUseCaseData.as_view(), name="PostUseCaseData"),
    path('critical-assets/', CriticalAsset.as_view(), name="CriticalAsset"),
    path('administration/', Administration.as_view(), name="Administration"),
    path('spray/', Spray.as_view(), name="Spray"),
    path('greybox/', Greybox.as_view(), name="Greybox"),
    path('progress/', Progress.as_view(), name="Progress"),
    path('export-report/', ExportReport.as_view(), name="ExportReport"),

    re_path(r'^get-final-hosts/$', GetFinalHosts.as_view(),
            name="GetFinalHosts"),
    re_path(r'^get-risk-severity/$', GetRiskSeverityData.as_view(),
            name="GetRiskSeverityData"),
    re_path(r'^get-issues-by-name/$', GetIssuesByName.as_view(),
            name="GetIssuesByName"),
    re_path(r'^findings/$', Findings.as_view(),
            name="Findings"),
    re_path(r'^download/$', Download.as_view(),
            name="Download"),
    re_path(r'^flowchart/$', FlowChart.as_view(),
            name="FlowChart"),
    re_path(r'^reset-password/$', ResetPassword.as_view(), name="ResetPassword"),

]
