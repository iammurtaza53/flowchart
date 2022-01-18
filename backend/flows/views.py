from rest_framework import viewsets
from flows.models import *
from .serializers import *
import json
from django.core import serializers
from rest_framework.renderers import JSONRenderer
from django.shortcuts import render
from .models import flows_1
from rest_framework.decorators import api_view, APIView
from rest_framework.response import Response

# Create your views here.


class FlowsSerializerViewSet(viewsets.ModelViewSet):

    serializer_class = FlowsSerializer
    queryset = flows_1.objects.all()


def flowChart(request):

    return render(request, 'flows/index.html')


# @api_view(['GET'])
# def post_data(request):
#     print("I have been called")
#     query_set = flows_1(flowid = '1',nodename= 'node A',relationship= 'NA')
#     query_set.save()

    # query_set = flows_1('1', 'node A', 'NA')
    # query_set.save()

    # query_set = flows_1('1', 'node A', 'NA')
    # query_set.save()
    # query_set = flows_1('1', 'node A', 'NA')
    # query_set.save()

    # return Response(True)
class GetUserData(APIView):
    def post(self, request):
        userData = request.data
        print(userData)
        return Response({'response': 200})


class GetFinalHostData(APIView):
    def get(self, request):
        data = FinalHostsTbl.objects.all()
        # data = serializers.serialize('json', data)
        # data = json.dump(data)
        serializer = FinalHostsSerializer(data)
        data = JSONRenderer.render(serializer.data)
        return Response({'status': 200, 'data': data})


class SnippetList(APIView):
    """
    List all snippets, or create a new snippet.
    """

    def get(self, request):
        f1 = flows_1(id=1, flowid=1, nodename='node A',
                     relationship='relationship to B')
        f1.save()
        f2 = flows_1(id=2, flowid=1, nodename='node B', relationship='NA')
        f2.save()
        f3 = flows_1(id=3, flowid=2, nodename='node A',
                     relationship='relationship to B')
        f3.save()
        f4 = flows_1(id=4, flowid=2, nodename='node B',
                     relationship='relationship to C')
        f4.save()
        f5 = flows_1(id=5, flowid=2, nodename='node C',
                     relationship='relationship to D')
        f5.save()
        f6 = flows_1(id=6, flowid=2, nodename='node D', relationship='NA')
        f6.save()
        f7 = flows_1(id=7, flowid=3, nodename='node A',
                     relationship='relationship to B')
        f7.save()
        f8 = flows_1(id=8, flowid=3, nodename='node B',
                     relationship='relationship to C')
        f8.save()
        f9 = flows_1(id=9, flowid=3, nodename='node C', relationship='NA')
        f9.save()
        # serializer = FlowsSerializer(flowid = 1,nodename= 'node A',relationship= 'NA')
        # serializer.save()

        return Response({'message': 'success'})
