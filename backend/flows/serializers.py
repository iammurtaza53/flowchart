from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from flows.models import *


class FlowsSerializer(ModelSerializer):
    class Meta:
        model = flows_1
        fields = "__all__"


class FinalHostsSerializer(serializers.Serializer):
    class Meta:
        model = FinalHostsTbl
        fields = "__all__"
