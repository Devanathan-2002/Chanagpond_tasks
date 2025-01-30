from django.shortcuts import render

# Create your views here.
# views.py
from django.shortcuts import render, redirect
from .forms import PostForm
from .models import Post
from django.http import HttpResponse

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('/blogger/create/')  # Redirect to a success page or another view
    else:
        form = PostForm()
    return render(request, 'blogger/createpost.html', {'form': form})


# views.py


def welcome(request):
    posts = Post.objects.order_by('-date_posted')[:3]
    return render(request, 'blogger/welcome.html', {'posts': posts})


def allposts(request):
    posts = Post.objects.all()
    return render(request, 'blogger/allposts.html', {'posts': posts})

def detailpost(request,slug):
    posts = Post.objects.get(slug=slug)
    return render(request,'blogger/detail.html',{'post':posts})