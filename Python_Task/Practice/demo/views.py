from django.shortcuts import render
from .models import dish
# Create your views here.
def foodlist(requests):
    data=dish.objects.all()
    for i in data:
        print(i.chef.age)
    context={'data':data}
    return render(requests,'demo/index.html',context=context)