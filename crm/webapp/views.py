from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, decorators

from .models import Record
from .forms import RegisterUserForm, LoginUserForm, CreateRecordForm


def home(request):
    return render(request, "webapp/index.html")


def user_register(request):
    form = RegisterUserForm()
    if request.method == "POST":
        form = RegisterUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("login")
    context = {"RegisterUserForm": form}
    return render(request, "webapp/register.html", context)


def user_login(request):
    form = LoginUserForm()
    if request.method == "POST":
        form = LoginUserForm(request, request.POST)
        if form.is_valid():
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
    records = Record.objects.all()
    context = {"ClientsRecords": records}

    return render(request, "webapp/dashboard.html", context)


@decorators.login_required(login_url="login")
def create_record(request):
    form = CreateRecordForm()
    if request.method == "POST":
        form = CreateRecordForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("dashboard")

    context = {"CreateRecordForm": form}
    return render(request, "webapp/create-record.html", context)


@decorators.login_required(login_url="login")
def update_record(request, pk):
    record = Record.objects.get(id=pk)
    if record is None:
        return redirect("dashboard")
    form = CreateRecordForm(instance=record)
    if request.method == "POST":
        form = CreateRecordForm(request.POST, instance=record)
        if form.is_valid():
            form.save()
            return redirect("dashboard")
    record_name = f"{record.first_name} {record.last_name}"
    context = {"UpdateRecordForm": form, "RecordName": record_name}
    return render(request, "webapp/update-record.html", context)


def user_logout(request):
    logout(request)
    return redirect("login")
