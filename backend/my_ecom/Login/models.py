from django.db import models

# Create your models here.

class Login(models.Model):
   loginnumber = models.models.CharField( max_length=200)

def __str__(self):
        return self.username
