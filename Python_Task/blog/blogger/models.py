from django.db import models

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    date_posted = models.DateTimeField(auto_now_add=True)
    content = models.TextField()
    image = models.ImageField(upload_to='images/')
    slug=models.SlugField(default="",null=False)
    
    def __str__(self):
        return self.title