import requests

endpoint = "http://localhost:8000/products"

response = requests.get(endpoint)

print(response.json())
