from django.db import models
import uuid

# Create your models here.


class flows_1(models.Model):
    id = models.AutoField(primary_key=True)
    flowid = models.IntegerField()
    nodename = models.CharField(max_length=100, null=True, blank=True)
    relationship = models.CharField(default='NA', max_length=100)

    def __str__(self):
        return self.nodename


class PathsTbl(models.Model):
    scan_id = models.IntegerField()
    pathid = models.IntegerField()
    host = models.CharField(max_length=100, blank=True, null=True)
    # Field name made lowercase.
    compromiseduser = models.CharField(
        db_column='compromisedUser', max_length=100)
    method = models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100, blank=True, null=True)
    domain = models.CharField(max_length=100, blank=True, null=True)
    relationship = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'paths_tbl'


class ScanIdTbl(models.Model):
    scan_id = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'scan_id_tbl'


class ProgressTbl(models.Model):
    description = models.CharField(max_length=100, blank=True, null=True)
    percentage = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'progress_tbl'


class FindingsTbl(models.Model):
    scan_id = models.IntegerField()
    name = models.CharField(max_length=100, blank=True, null=True)
    risk = models.CharField(max_length=100, blank=True, null=True)
    count = models.CharField(max_length=100, blank=True, null=True)
    attackmitre = models.CharField(max_length=100, blank=True, null=True)
    sia = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'findings_tbl'


class SubnetsTbl(models.Model):
    scan_id = models.IntegerField()
    # Field name made lowercase.
    subnet = models.CharField(db_column='Subnet', max_length=100)
    # Field name made lowercase.
    subnet_id = models.IntegerField(db_column='Subnet_id')
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'subnets_tbl'


class FinalHostsTbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100, blank=True, null=True)
    hostname = models.CharField(max_length=100, blank=True, null=True)
    # Field name made lowercase.
    os = models.CharField(db_column='OS', max_length=100,
                          blank=True, null=True)
    subnet = models.CharField(max_length=100, blank=True, null=True)
    compromised = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'final_hosts_tbl'


class SmbDetailsTbl(models.Model):
    scan_id = models.IntegerField()
    domain = models.CharField(max_length=100, blank=True, null=True)
    # Field name made lowercase.
    os = models.CharField(db_column='OS', max_length=100)
    host = models.CharField(max_length=100, blank=True, null=True)
    hostname = models.CharField(max_length=100, blank=True, null=True)
    signing = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)
    compromised = models.CharField(max_length=100, blank=True, null=True)
    subnet = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'smb_details_tbl'


class MssqlTbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mssql_tbl'


class issue6Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue6_tbl'


class RevalidationTbl(models.Model):
    vulnerability = models.CharField(max_length=100, blank=True, null=True)
    host = models.CharField(max_length=100, blank=True, null=True)
    result = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'revalidation_tbl'


class issue7Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    user = models.CharField(max_length=100)
    password = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue7_tbl'


class issue3Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue3_tbl'


class issue4Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue4_tbl'


class issue1Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue1_tbl'


class issue2Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue2_tbl'


class DomainUsersPasswordTbl(models.Model):
    scan_id = models.IntegerField()
    domain = models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100)
    password = models.CharField(max_length=100, blank=True, null=True)
    host = models.CharField(max_length=100, blank=True, null=True)
    method = models.CharField(max_length=100, blank=True, null=True)
    used = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'domain_users_password_tbl'


class issue5Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'issue5_tbl'


class DomainUsersHashTbl(models.Model):
    scan_id = models.IntegerField()
    domain = models.CharField(max_length=100, blank=True, null=True)
    user = models.CharField(max_length=100)
    hash = models.CharField(max_length=100, blank=True, null=True)
    host = models.CharField(max_length=100, blank=True, null=True)
    method = models.CharField(max_length=100, blank=True, null=True)
    used = models.CharField(max_length=100, blank=True, null=True)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'domain_users_hash_tbl'


class Service135Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_135_tbl'


class Service137Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_137_tbl'


class Service1433Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_1433_tbl'


class Service1521Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_1521_tbl'


class Service17988Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_17988_tbl'


class Service2049Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_2049_tbl'


class Service21Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_21_tbl'


class Service22Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_22_tbl'


class Service23Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_23_tbl'


class Service25Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_25_tbl'


class Service27017Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_27017_tbl'


class Service3250Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_3250_tbl'


class Service3260Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_3260_tbl'


class Service3306Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_3306_tbl'


class Service3389Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_3389_tbl'


class Service389Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_389_tbl'


class Service443Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_443_tbl'


class Service445Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_445_tbl'


class Service5060Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_5060_tbl'


class Service5222Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_5222_tbl'


class Service5432Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_5432_tbl'


class Service5800Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_5800_tbl'


class Service5900Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_5900_tbl'


class Service623Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_623_tbl'


class Service632Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_632_tbl'


class Service8080Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_8080_tbl'


class Service80Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_80_tbl'


class Service902Tbl(models.Model):
    scan_id = models.IntegerField()
    host = models.CharField(max_length=100)
    timpestamp = models.DateField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'service_902_tbl'


class RegisteredUsers(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False)
    user_firstname = models.CharField(max_length=400)
    user_lastname = models.CharField(max_length=400)
    password = models.CharField(max_length=50)
    email = models.EmailField(max_length=250)


class CriticalAssets(models.Model):
    ip_id = models.AutoField(primary_key=True)
    ip = models.CharField(max_length=18)
