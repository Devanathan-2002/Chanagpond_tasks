from django.shortcuts import render
from django.http import HttpResponse

def month(requests,month_name):
    return HttpResponse(f'You are in {month_name}')
