from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("register", views.user_register, name="register"),
    path("login", views.user_login, name="login"),
    path("logout", views.user_logout, name="logout"),
    path("dashboard", views.dashboard, name="dashboard"),
    path("records/create", views.create_record, name="create-record"),
    path("records/update/<int:pk>", views.update_record, name="update-record"),
    path("records/delete/<int:pk>", views.delete_record, name="delete-record"),
]
