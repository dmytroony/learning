# import requests
# print(requests.get('https://google.com/').text)

# print('Hello, World!')
# print(type(1))
# print(type(1 / 3))
# print(type('1'))
# print(type(True))
# print(type(None))

# s = '0123456789'
# s = 'adsdaAGFJHsds aSAsd aVBBsd asda sdasSDASd asdDSasfdf'
# print(s[1:3])
# print(s[-1])
# print(s[1:-1])
# print(s.upper())
# print(s.lower())

# numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'hello', [1, 2, 3]]
# print(numbers)
# print(type(numbers))
# print(numbers[-1], numbers[-1][1])
# print(numbers[:10])
# numbers.append(numbers[:2])
# print(numbers)

# users = [
#     ['Jack', 'Black', 100],
#     ['Mary', 'Jane', 40],
# ]

# user = {
#     'first_name': 'Jack',
#     'last_name': 'Black',
#     'age': 100,
# }

# users = [
#     {'first_name': 'Jack', 'last_name': 'Black', 'age': 100},
#     {'first_name': 'Mary', 'last_name': 'Jane', 'age': 40},
# ]
# users[0]['rate'] = 9.7
#
# print(users[1]['age'])
# print(users[0]['rate'])

# import find
import requests

# users = [
#     {'first_name': 'Jack 1', 'last_name': 'Black 1', 'age': 90},
#     {'first_name': 'Jack 2', 'last_name': 'Black 2', 'age': 199},
#     {'first_name': 'Jack 3', 'last_name': 'Black 3', 'age': 21},
#     {'first_name': 'Jack 4', 'last_name': 'Black 4', 'age': 32},
#     {'first_name': 'Jack 5', 'last_name': 'Black 5', 'age': 45},
#     {'first_name': 'Jack 6', 'last_name': 'Black 6', 'age': 23},
#     {'first_name': 'Jack 7', 'last_name': 'Black 7', 'age': 2},
#     {'first_name': 'Jack 8', 'last_name': 'Black 8', 'age': 65},
#     {'first_name': 'Jack 9', 'last_name': 'Black 9', 'age': 12},
# ]
#
# print(find.find_min(users))
#
# print(requests.get('https://google.com').status_code)

# pip3 install library_name(ex.: requests) - how to install any library

# links1 = [
#     {'url': 'https://python.org'},
#     {'url': 'https://javascript.info'},
#     {'url': 'https://php.net'},
#     {'url': 'https://jetbrains.com'},
#     {'url': 'https://css-tricks.com'},
# ]

links = [
    'https://python.org',
    'https://javascript.info',
    'https://php.net',
    'https://jetbrains.com',
    'https://css-tricks.com',
]

for link in links:
    amount = 0
    while amount <= 100:
        print(amount, link, requests.get(link).status_code)
        amount += 1
