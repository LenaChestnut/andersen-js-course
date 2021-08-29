/* eslint-disable no-undef */
/* eslint-disable no-console */
// переписать foo с использованием async/await

const getUsers = url => fetch(url);

async function foo(url) {
  try {
    const response = await getUsers(url);
    const data = await response.json();
    const [user] = await data;
    console.log(user);
  } catch (error) {
    console.log('Error!', error);
  }
}

foo('https://jsonplaceholder.typicode.com/users');
