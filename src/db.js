const users = [
  {
    id: '1',
    name: 'Andrew',
    email: 'gaza@mail.com',
    age: 27
  },
  {
    id: '2',
    name: 'pa',
    email: 'pa@mail.com'
  },
  {
    id: '3',
    name: 'for',
    email: 'look@mail.com'
  }
];

const posts = [
  {
    id: '1',
    title: 'How to write MERN stack app',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    published: true,
    author: '1'
  },
  {
    id: '2',
    title: 'React News',
    body: 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    published: false,
    author: '2'
  },
  {
    id: '3',
    title: 'GraphQL in 30 minutes',
    body: "react application was greet thing with node js and graphql and prisma applicatio",
    published: true,
    author: '2'
  }
];

const comments = [
  {
    id: '1',
    text: 'COOOOOOL',
    author: '1',
    post: '3'
  },
  {
    id: '2',
    text: 'I don\'t like it',
    author: '3',
    post: '1'
  },
  {
    id: '3',
    text: 'HODL',
    author: '1',
    post: '3'
  }, {
    id: '4',
    text: 'Thanks for the post!',
    author: '2',
    post: '1'
  }
];

const db = { users, posts, comments };

export { db as default };
