from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm


def index(request):
    tasks = Task.objects.all()
    form = TaskForm()

    if request.method == "POST":
        form = TaskForm(request.POST)
        if form.is_valid:
            form.save()
        redirect("/")

    context = {"tasks": tasks, "TaskForm": form}
    return render(request, "tasks.html", context)
