from rest_framework import serializers
from .models import Authorcls


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Authorcls
        fields="__all__"
        read_only_field=['id']