from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from flows.models import *
from django.contrib.auth.models import User


class FlowsSerializer(ModelSerializer):
    class Meta:
        model = flows_1
        fields = "__all__"


class FinalHostsSerializer(ModelSerializer):
    class Meta:
        model = FinalHostsTbl
        fields = "__all__"


class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class ScanIdTblSerializer(ModelSerializer):
    class Meta:
        model = ScanIdTbl
        fields = ['scan_id']


class FindingtblSerailizer(ModelSerializer):
    class Meta:
        model = FindingsTbl
        fields = '__all__'


class CriticalAssetsSerializer(ModelSerializer):
    class Meta:
        model = CriticalAssets
        fields = '__all__'
