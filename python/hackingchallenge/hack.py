class Hack:

    def __init__(self,
                 login_generator=None,
                 password_generator=None,
                 request=None,
                 limit_passwords_per_login=100,
                 result_filename='result.txt'):
        self.login_generator = login_generator
        self.password_generator = password_generator
        self.request = request
        self.limit_passwords_per_login = limit_passwords_per_login
        self.result_filename = result_filename

    def attack(self):
        login = self.login_generator.next()
        while login is not None:

            for i in range(self.limit_passwords_per_login):
                password = self.password_generator.next()
                if password is None:
                    break
                print(f'Trying {login=} {password=} ...')
                success = self.request(login, password)
                if success:
                    print(f'SUCCESS! {login=} {password=}')
                    with open(self.result_filename, 'a') as result_file:
                        result_file.write(f'{login=} {password=}\n')

            login = self.login_generator.next()

        # with open(self.result_filename, 'a') as result_file:
        #     result_file.write('login: l1, password: 123\n')
        # print('There will be attack code')


hack = Hack()
hack.attack()

# print(hack.result_filename)
# 1:09
