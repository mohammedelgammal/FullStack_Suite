from django import forms
from .models import Task


class TaskForm(forms.ModelForm):
    title = forms.CharField(
        required=True,
        max_length=200,
        widget=forms.TextInput(attrs={"placeholder": "Add task title"}),
    )

    class Meta:
        model = Task
        fields = "__all__"
