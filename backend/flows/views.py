from rest_framework import viewsets
from flows.models import *
from .serializers import *
from django.shortcuts import render
from .models import flows_1
from rest_framework.decorators import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
import xlsxwriter
import csv

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
            return Response({'status': 500, 'message': "User does not exists "})


class GetFinalHostOSData(APIView):
    def get(self, request):
        scan_id = request.GET.get('scan_id')
        data = FinalHostsTbl.objects.filter(scan_id=scan_id).values()
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
            return Response({'status': 200, 'scans': scanIds.data})


class GetAllUsers(APIView):
    def get(self, request):
        allUsers = User.objects.all()
        serialize = UserSerializer(allUsers, many=True)
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
        return Response({'status': 200, 'IP': data["IP"]})


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


class DownloadFinalHost(APIView):
    def get(self, request):
        # row, column = 0, 0
        finalhosts = FinalHostsTbl.objects.all().values()
        serialize = FinalHostsSerializer(finalhosts, many=True)
        columnNames = ['scan_id', 'host', "hostname", 'os',
                       'subnet', 'compromised', 'timpestamp']
        with open('FinalHost.csv', 'w', encoding='UTF8', newline='') as f:
            writer = csv.DictWriter(
                f, fieldnames=columnNames, extrasaction='ignore')
            writer.writeheader()
            writer.writerows(serialize.data)
                # for data in row:
                # writer.writerows(data)
                # workbook = xlsxwriter.Workbook('FinalHosts.xlsx')
                # worksheet = workbook.add_worksheet()
                # # Add a bold format to use to highlight cells.
                # bold = workbook.add_format({'bold': True})
                # # adding column names in worksheet
                # columnNames = ['Scan Id', 'Host', "Host Name", 'OS',
                #                'Subnet', 'Compromised', 'TimeStamp']
                # # adding column names in worksheet
                # # setting starting column and row
                # column, row = 1, 1
                # for header in columnNames:
                #     worksheet.write(row, column, header, bold)
                #     column += 1
                # # adding column names in worksheet

                # # adding data in worksheet
                # # setting starting row
                # row = 2
                # for excelData in serialize.data:
                #     # setting starting column for each row
                #     column = 1
                #     for field in excelData:
                #         if field != "id":
                #             worksheet.write(row, column, excelData[field])
                #             column += 1
                #     row += 1
                # # adding data in worksheet

                # # Setting column width (formatting)
                # worksheet.set_column('D:E', 30)
                # for column in ('C', 'F', 'G', 'H'):
                #     worksheet.set_column(f'{column}:{column}', 15)

                # workbook.close()
        return Response({'status': 200})


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
