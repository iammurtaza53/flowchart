from django.db import models

# Create your models here.
class flows_1(models.Model):
    id = models.AutoField(primary_key=True)
    flowid = models.IntegerField()
    nodename = models.CharField(max_length=100,null=True,blank=True)
    relationship = models.CharField(default='NA',max_length=100)
    
    def __str__(self):
        return self.nodename
    