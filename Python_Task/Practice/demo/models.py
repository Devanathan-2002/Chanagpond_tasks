from django.db import models

# Create your models here.


class chef(models.Model):
    fullname=models.CharField(max_length=50)
    age=models.IntegerField()
    address=models.CharField(max_length=50)


    def __str__(self):
        return f'{self.fullname}'
    
class dish(models.Model):
    name=models.CharField(max_length=50)
    rating=models.IntegerField(max_length=5)
    is_bestselling=models.BooleanField()
    price=models.IntegerField(max_length=1000)
    chef=models.ForeignKey(chef,on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Disg name: {self.name} chefname:{self.chef}'
