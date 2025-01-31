from django.db import models

# Create your models here.
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from author.models import Authorcls 

# Create your models here.

class Book(models.Model):
    title= models.CharField(max_length=50)
    rating = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])

    author= models.ForeignKey(Authorcls, on_delete=models.CASCADE)
    
def __str__(self):
    return self.title