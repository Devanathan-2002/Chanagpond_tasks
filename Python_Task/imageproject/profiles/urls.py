from django.urls import path

from . import views

urlpatterns = [
    path('',views.ProfileCreateView.as_view())
]
