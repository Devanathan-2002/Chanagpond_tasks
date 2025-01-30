# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('create/', views.create_post, name='create_post'),
    path('', views.welcome, name='welcome'),
    path('nextpage/', views.allposts, name='loadmore'),
    path('blog/<slug:slug>/',views.detailpost,name='detail')
]
