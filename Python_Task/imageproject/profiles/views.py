from django.shortcuts import render
from .models import UserProfile
from django.views.generic.edit import CreateView
from .forms import PortfolioForms
# Create your views here.


class ProfileCreateView(CreateView):
    model=UserProfile
    template_name="profiles/createprofile.html"
    fields="__all__"
    success_url="/profiles"