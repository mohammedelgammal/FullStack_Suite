from django.urls import path
from .views import SnippetList, SnippetDetail

urlpatterns = [
    path("", SnippetList.as_view()),
    path("<int:pk>", SnippetDetail.as_view()),
]
