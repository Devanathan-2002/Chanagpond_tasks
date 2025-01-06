from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from django.template.loader import render_to_string
from .models import Book
# Create your views here.
def index(request):
    book=Book.objects.all()
    context={'book_collections':book}
    return render(request,'author/index.html', context)


def bookdetails(request,id):
    books=get_object_or_404(Book,pk=id)
    context={'book_title':books.title,'book_rating':books.rating}
    
    return render(request,'author/bookdetail.html',context=context)