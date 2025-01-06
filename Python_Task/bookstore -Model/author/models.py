from django.db import models

# Create your models here.

class Author(models.Model):
    first_name=models.CharField(max_length=20)
    last_name=models.CharField(max_length=20)
    age=models.IntegerField()

    def __str__(self):
        return f'Name:{self.first_name} age:{self.age}'
    

class Book(models.Model):
    title=models.CharField(max_length=50)
    rating=models.IntegerField()
    is_bestselling=models.BooleanField()
    author=models.ForeignKey("Author",on_delete=models.CASCADE,null=True)

    def __str__(self):
        return f'title: {self.title} author: {self.author}'