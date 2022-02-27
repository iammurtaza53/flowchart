from rest_framework_simplejwt import tokens
# from rwcmainapp1.models import Entity, ManagedOrg, UserDetails
from rest_framework.permissions import BasePermission
from rest_framework.authtoken.models import Token
from rest_framework_simplejwt.backends import TokenBackend
from rest_framework_simplejwt.serializers import TokenVerifySerializer


class HasToken(BasePermission):
    def has_permission(self, request, view):
        try:
            token = request.META['HTTP_AUTHORIZATION']
            # if TokenVerifySerializer(data = {'token' : token[7:]}).is_valid():
            #     return True
            # print(token)
            if token:
                return True
        except:
            return False