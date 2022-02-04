from flows.models import *
from .serializers import *
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework.exceptions import APIException
from django.http import HttpResponse
import csv

# Create your views here.


class FlowChart(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        queryset = PathsTbl.objects.filter(scan_id=scan_id)
        serializer = PathsSerializer(queryset, many=True)
        return Response({'status': 200, 'data': serializer.data})

    def post(self, request):
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


class RegisterUser(APIView):
    def post(self, request):

        data = request.data
        user = User.objects.filter(email=data['email'])
        if not user:
            try:
                user = User.objects.create_user(username=data['email'], first_name=data['firstName'], last_name=data['lastName'],
                                                email=data['email'], password=data['password'])
                user.save()

                return Response({'status': 200, 'message': 'The User has been registered '})
            except Exception as error:
                print(error)
        return Response({'status': 500, 'message': 'User already exists.'})


class LoginUser(APIView):
    def post(self, request):
        data = request.data
        user = authenticate(username=data['email'], password=data['password'])
        if user is not None:
            login(request, user)
            user = UserSerializer(user)
            return Response({'status': 200, 'message': "Login Sucessfull ", 'user': user.data})
        else:
            raise APIException(
                {'status': 500, 'message': "User does not exists or Invalid Credentials "})


class GetFinalHosts(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        data = FinalHostsTbl.objects.filter(scan_id=scan_id).values()
        if data:
            serializer = FinalHostsSerializer(data, many=True)
            return Response({'status': 200, 'data': serializer.data})
        else:
            return Response({'status': 500})


class GetRiskSeverityData(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        data = FindingsTbl.objects.filter(scan_id=scan_id).values('risk')
        if data:
            serializer = RiskSerializer(data, many=True)
            return Response({'status': 200, 'data': serializer.data})
        else:
            return Response({'status': 500})


class Scans(APIView):
    def get(self, request):
        scanIds = ScanIdTbl.objects.all().order_by('scan_id')
        scanIds = ScanIdTblSerializer(scanIds, many=True)
        if scanIds:
            return Response({'status': 200, 'scans': scanIds.data})


class Users(APIView):
    def get(self, request):
        allUsers = User.objects.all()
        serialize = UserSerializer(allUsers, many=True)
        return Response({'status': 200, 'data': serialize.data})


class Scan(APIView):
    def post(self, request):
        data = request.data
        print(data)
        return Response({'status': 200, 'message': 'Data has been recieved on the backend'})

    def get(self, request):
        return Response({'status': 200, 'message': 'Scan API has been called'})


class Findings(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        data = FindingsTbl.objects.filter(scan_id=scan_id)
        serialize = FindingtblSerailizer(data, many=True)
        return Response({'status': 200, 'findings_data': serialize.data})


class PostUseCaseData(APIView):
    def post(self, request):
        data = request.data
        print(data)
        return Response({'status': 200, 'IP': data["IP"]})


class CriticalAsset(APIView):
    def post(self, request):
        ipSet = request.data
        serialize = CriticalAssetsSerializer(data=ipSet, many=True)
        if serialize.is_valid():
            serialize.save()
        else:
            print(serialize.errors)
        return Response({'status': 200, 'message': 'data has been saved in the table.'})

    def get(self, request):
        queryset = CriticalAssets.objects.all()
        serialize = CriticalAssetsSerializer(queryset, many=True)
        if serialize:
            return Response({'status': 200, 'ip_set': serialize.data})
        else:
            print(serialize.errors)
            return Response({'status': 500, 'error': 'could not fetch the data.'})


class Download(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        finalhosts = FinalHostsTbl.objects.filter(scan_id=scan_id)
        serialize = FinalHostsSerializer(finalhosts, many=True)
        columnNames = ['scan_id', 'host', "hostname",
                       'os', 'subnet', 'compromised', 'timpestamp']
        with open('FinalHost.csv', 'w', encoding='UTF8', newline='') as f:
            writer = csv.DictWriter(
                f, fieldnames=columnNames, extrasaction='ignore')
            writer.writeheader()
            writer.writerows(serialize.data)
        f.close()

        report_file = open('FinalHost.csv', "rb")
        filename = "FinalHost.csv"
        response = HttpResponse(
            report_file,
            content_type='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        )
        response['Content-Disposition'] = 'attachment; filename=%s' % filename
        return response


class GetIssuesByName(APIView):
    def get(self, request):
        scan_id = request.GET.get("scan_id",)
        issue_name = request.GET.get("issue_name",)

        if issue_name == 'issue1':
            data = issue1Tbl.objects.filter(scan_id=scan_id).values()
            serialize = Issue1Serializer(data, many=True)

        elif issue_name == 'issue2':
            data = issue2Tbl.objects.filter(scan_id=scan_id).values()
            serialize = Issue2Serializer(data, many=True)

        elif issue_name == 'issue7':
            data = issue7Tbl.objects.filter(scan_id=scan_id).values()
            serialize = Issue7Serializer(data, many=True)

        return Response({'status': 200, 'issues': serialize.data})


class Administration(APIView):
    def post(self, request):
        data = request.data
        print(data)
        return Response({'status': 200, 'data': data})


class Spray(APIView):
    def post(self, request):
        data = request.data
        print(data)
        return Response({'status': 200, 'data': data})


class Greybox(APIView):
    def post(self, request):
        data = request.data
        serialize = GreyboxSerializer(data=data)
        if serialize.is_valid():
            serialize.save()
        return Response({'status': 200, 'data': data})

    def get(self, request):
        queryset = GreyBoxTbl.objects.last()
        serialize = GreyboxSerializer(queryset)
        return Response({'status': 200, 'data': serialize.data})


class Progress(APIView):
    def get(self, requst):
        queryset = ProgressTbl.objects.filter(id=1)
        serialize = ProgressTblSerializer(queryset, many=True)
        return Response({'status': 200, 'data': serialize.data})


class ExportReport(APIView):
    def get(self, request):
        print("running export report function")
        return Response({'status': 200, 'message': "running export report function"})


class ResetPassword(APIView):
    def patch(self, request):
        data = request.data
        user = User.objects.get(username=data['username'])
        user.set_password(data['password'])
        user.save()
        return Response({'status': 200, 'message': 'The password has been updated. '})
