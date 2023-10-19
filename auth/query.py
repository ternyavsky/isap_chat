import requests

res = requests.get("https://oauth.telegram.org/auth?bot_id=5889044797&origin=https%3A%2F%localhost&embed=1&request_access=true")

print(res.data)
