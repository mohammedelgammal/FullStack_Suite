from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User
from .models import Record

from django import forms


class RegisterUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["username", "password1", "password2"]


class LoginUserForm(AuthenticationForm):
    username = forms.CharField(required=True, widget=forms.TextInput())
    password = forms.CharField(required=True, widget=forms.PasswordInput())


class CreateRecordForm(forms.ModelForm):
    first_name = forms.CharField(required=True, widget=forms.TextInput())
    last_name = forms.CharField(required=True, widget=forms.TextInput())
    email = forms.CharField(required=True, widget=forms.TextInput())
    phone = forms.CharField(required=False, widget=forms.TextInput())
    address = forms.CharField(required=False, widget=forms.TextInput())
    city = forms.CharField(required=True, widget=forms.TextInput())
    province = forms.CharField(required=True, widget=forms.TextInput())
    country = forms.CharField(required=True, widget=forms.TextInput())

    class Meta:
        model = Record
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone",
            "address",
            "city",
            "province",
            "country",
        ]
