from django.contrib import admin
from .models import Book,Author


class bookadmin(admin.ModelAdmin):
    list_display=('title','rating')
    list_filter=('rating',)


admin.site.register(Author)
admin.site.register(Book,bookadmin)


 
# Register your models here.

