import requests


def request(login, password):
    try:
        response = requests.post('http://google.com/x/1.1/login', data={'login': login, 'password': password})
        return response.json()['success']
    except KeyError:
        return False
