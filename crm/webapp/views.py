from django.shortcuts import render, redirect
from .forms import RegisterUserForm


def home(request):
    return render(request, "webapp/index.html")


def register(request):
    form = RegisterUserForm()

    if request.method == "POST":
        form = RegisterUserForm(request.POST)
        if form.is_valid:
            form.save()
            redirect("/")
    context = {"RegisterUserForm": form}
    return render(request, "webapp/register.html", context)


def login(request):
    return render(request, "webapp/my-login.html")
