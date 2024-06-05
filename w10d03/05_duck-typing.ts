interface User {
  username: string;
  password: string;
}

const anotherUser: User = {} as User;

const login = (user: User): boolean => {
  return true;
};

const myUser = {
  username: 'jstamos',
  password: '1234',
  faveTvShow: 'full house'
};

login(myUser);
