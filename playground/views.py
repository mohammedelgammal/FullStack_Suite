from django.shortcuts import render


def sum(a, b):
    return a + b


def hello(request):
    x = 10
    y = 2
    result = sum(x, y)
    return render(request, "hello.html", {"result": result})
