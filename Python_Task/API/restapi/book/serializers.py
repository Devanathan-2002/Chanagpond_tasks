from rest_framework import searlizers
from .models import Book
from author.serializers import AuthorSerializer



class BookSerializer(searlizers.ModelSerializer):
    author_id=searlizers.IntegerField(write_only=True)
    author=AuthorSerializer(read_only=True)
    
    
    class Meta:
        model=Book
        fields=['id','rating','author','author_id']
        read_only_fields=['id']