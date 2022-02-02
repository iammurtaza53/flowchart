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

class RiskSerializer(ModelSerializer):
    class Meta:
        model = FindingsTbl
        fields = ['risk']


class CriticalAssetsSerializer(ModelSerializer):
    class Meta:
        model = CriticalAssets
        fields = '__all__'


class Issue1Serializer(ModelSerializer):
    class Meta:
        model = issue1Tbl
        fields = '__all__'

class Issue2Serializer(ModelSerializer):
    class Meta:
        model = issue2Tbl
        fields = '__all__'


class Issue7Serializer(ModelSerializer):
    class Meta:
        model = issue7Tbl
        fields = '__all__'
