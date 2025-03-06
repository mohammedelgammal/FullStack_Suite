from django.http import JsonResponse
from django.forms.models import model_to_dict
from products.models import Product



def api_home(request, *args, **kwargs):
    product = Product.objects.all().order_by("?").first()
    data = {}
    if product:
        data = model_to_dict(product, ["title", "price"])

    return JsonResponse(data)
