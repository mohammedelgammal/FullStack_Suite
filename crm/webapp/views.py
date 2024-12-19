from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

from .forms import RegisterUserForm, LoginUserForm


def home(request):
    return render(request, "webapp/index.html")


def register(request):
    form = RegisterUserForm()

    if request.method == "POST":
        form = RegisterUserForm(request.POST)
        if form.is_valid:
            form.save()
            redirect("login")
    context = {"RegisterUserForm": form}
    return render(request, "webapp/register.html", context)


def login(request):
    form = LoginUserForm()
    if request.method == "POST":
        form = LoginUserForm(request, request.POST)
        if form.is_valid:
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username, password)
            if user is not None:
                login(request, user)
                return redirect("dashboard")
    context = {"LoginUserForm": form}
    return render(request, "webapp/my-login.html", context)


def logout(request):
    logout(request)
    return redirect("login")
