from django.http import JsonResponse
import json


def api_home(request, *args, **kwargs):
    data = {}
    try:
        data = json.loads(request.body)
    except:
        pass

    data["headers"] = dict(request.headers)
    data["content-type"] = request.content_type
    data["params"] = request.GET

    return JsonResponse(data)
