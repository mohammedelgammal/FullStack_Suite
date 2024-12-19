from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, decorators


from .forms import RegisterUserForm, LoginUserForm


def home(request):
    return render(request, "webapp/index.html")


def user_register(request):
    form = RegisterUserForm()

    if request.method == "POST":
        form = RegisterUserForm(request.POST)
        if form.is_valid:
            form.save()
            return redirect("login")
    context = {"RegisterUserForm": form}
    return render(request, "webapp/register.html", context)


def user_login(request):
    form = LoginUserForm()
    if request.method == "POST":
        form = LoginUserForm(request, request.POST)
        if form.is_valid:
            username = request.POST.get("username")
            password = request.POST.get("password")
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect("dashboard")
    context = {"LoginUserForm": form}
    return render(request, "webapp/my-login.html", context)


@decorators.login_required(login_url="login")
def dashboard(request):
    return render(request, "webapp/dashboard.html")


def user_logout(request):
    logout(request)
    return redirect("login")
