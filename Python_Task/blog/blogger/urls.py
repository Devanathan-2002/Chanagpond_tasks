# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_post, name='create_post'),
    path('', views.welcome, name='welcome'),
    path('next-page/', views.allposts, name='loadmore'),
    path('<slug:slug>',views.detailpost,name='detail')
]
