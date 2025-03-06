from django.db import models


# Create your models here.
class Product(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=5, decimal_places=2, default=99.99)
