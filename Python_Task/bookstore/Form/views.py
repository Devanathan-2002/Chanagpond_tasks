from django.shortcuts import render
from .form import ReviewForm
from django.http import HttpResponse
# Create your views here.
def forms(request):
    if request.method=="POST":
        form=ReviewForm(request.POST)

        if form.is_valid():
            print(form.cleaned_data)
            return HttpResponse('Thank You')
    else:
        form=ReviewForm()


    
    return render(request,'Form/form.html',{'form':form})