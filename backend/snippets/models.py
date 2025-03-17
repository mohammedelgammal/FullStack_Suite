from django.db import models
from pygments.lexers import get_all_lexers
from pygments.styles import get_all_styles

DEFAULT_LANG_CHOICE = "python"
DEFAULT_STYLE_CHOICE = "friendly"
LANG_CHOICES = sorted(
    [(lexer[1][0], lexer[0]) for lexer in get_all_lexers() if lexer[1]]
)
STYLE_CHOICES = sorted([(style, style) for style in get_all_styles()])


class Snippet(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=True, default="")
    code = models.TextField()
    linenos = models.BooleanField(default=False)
    lang_choice = models.CharField(
        choices=LANG_CHOICES, default=DEFAULT_LANG_CHOICE, max_length=100
    )
    style_choice = models.CharField(
        choices=STYLE_CHOICES, default=DEFAULT_STYLE_CHOICE, max_length=100
    )

    class Meta:
        ordering = ["created"]
