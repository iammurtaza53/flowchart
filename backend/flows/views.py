from html5lib import serialize
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

class RegisterUser(APIView):
    def post(self, request):
        userData = request.data
        registeredUser = RegisteredUsers.objects.filter(
            email=userData['email'])
        if not registeredUser:
            registerUser = RegisteredUsers()
            registerUser.user_firstname = userData['firstName']
            registerUser.user_lastname = userData['lastName']
            registerUser.email = userData['email']
            registerUser.password = userData['password']
            registerUser.save()

            return Response({'status': 200, 'message': 'The User has been registered '})
        return Response({'status': 500, 'message': 'User already exists.'})


class LoginUser(APIView):
    def post(self, request):
        data = request.data
        userEmail = data['email']
        userPassword = data['password']
        validUser = RegisteredUsers.objects.filter(
            email=userEmail, password=userPassword).values()
        userDetails = RegisteredUsersSerializer(validUser, many=True)
        if userDetails:
            return Response({'status': 200, 'message': "Login Sucessfull ", 'userDetail': userDetails.data})
        else:
            return Response({'status': 500, 'message': "User does not exists "})


class GetFinalHostOSData(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        data = FinalHostsTbl.objects.filter(scan_id=scan_id).values('os')
        if data:
            serializer = FinalHostsSerializer(data, many=True)
            return Response({'status': 200, 'data': serializer.data})
        else:
            return Response({'status': 500})


class GetScanId(APIView):
    def get(self, request):
        scanIds = ScanIdTbl.objects.all().order_by('scan_id')
        scanIds = ScanIdTblSerializer(scanIds, many=True)
        if scanIds:
            return Response({'status': 200, 'scan-id': scanIds.data})


class GetAllUsers(APIView):
    def get(self, request):
        allUsers = RegisteredUsers.objects.all()
        serialize = RegisteredUsersSerializer(allUsers, many=True)
        return Response({'status': 200, 'data': serialize.data})


class Scan(APIView):
    def get(self, request):
        return Response({'status': 200, 'message': 'Scan API has been called'})


class GetAllIssues(APIView):
    def get(self, request):
        # scan_id = request.GET.get("scan_id",)
        # data = FindingsTbl.objects.filter(scan_id=scan_id).values()
        data = FindingsTbl.objects.all().values()
        serialize = FindingtblSerailizer(data, many=True)
        return Response({'status': 200, 'findings_data': serialize.data})


class GetStartScanData(APIView):
    def post(self, request):
        data = request.data
        print(data)
        return Response({'status': 200, 'message': 'Data has been recieved on the backend'})


class PostUseCaseData(APIView):
    def post(self, request):
        data = request.data
        print(data)
        return Response({'status': 200, 'message': 'The data has been recieved on the backend.'})


class CriticalAssetsData(APIView):
    def post(self, request):
        ipSet = request.data
        serialize = CriticalAssetsSerializer(data=ipSet, many=True)
        if serialize.is_valid():
            serialize.save()
        else:
            print(serialize.errors)
        return Response({'status': 200, 'message': 'data has been saved in the table.'})

    def get(self, request):
        ipSet = CriticalAssets.objects.all()
        serialize = CriticalAssetsSerializer(ipSet, many=True)
        if serialize:
            return Response({'status': 200, 'ip_set': serialize.data})
        else:
            print(serialize.errors)
            return Response({'status': 500, 'error': 'could not fetch the data.'})


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
