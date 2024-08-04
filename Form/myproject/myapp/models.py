from django.db import models

# Create your models here.

class SubmitCount(models.Model):
    count = models.IntegerField(default=0)