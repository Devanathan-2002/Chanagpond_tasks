from django.shortcuts import render
from .forms import ReviewForm
from django.http import HttpResponse
# Create your views here.
def forms(request):
    if request.method=="POST":
        form=ReviewForm(request.POST)

        if form.is_valid():
            form.save()
            return HttpResponse('Thank You')
    else:
        form=ReviewForm()


    
    return render(request,'Form/form.html',{'form':form})