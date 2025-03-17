from rest_framework import serializers
from .models import (
    Snippet,
    LANG_CHOICES,
    STYLE_CHOICES,
    DEFAULT_STYLE_CHOICE,
    DEFAULT_LANG_CHOICE,
)


class SnippetSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    code = serializers.CharField(style={"base_template": "textarea.html"})
    linenos = serializers.BooleanField(required=False)
    language = serializers.ChoiceField(
        source="lang_choice", choices=LANG_CHOICES, default=DEFAULT_LANG_CHOICE
    )
    style = serializers.ChoiceField(
        source="style_choice", choices=STYLE_CHOICES, default=DEFAULT_STYLE_CHOICE
    )

    def create(self, validated_data):
        return Snippet.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.code = validated_data.get("code", instance.code)
        instance.linenos = validated_data.get("linenos", instance.linenos)
        instance.lang_choice = validated_data.get("language", instance.language)
        instance.style_choice = validated_data.get("style", instance.style_choice)
        instance.save()
        return instance
