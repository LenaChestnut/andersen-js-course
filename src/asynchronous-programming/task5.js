/* eslint-disable no-undef */
/* eslint-disable no-console */
// функция принимает массив URL и получает по ним данные
// когда все данные загружены - вывести массив с ними в консоль
// 1 вариант - параллельная загрузка
// 2 вариант - последовательная загрузка

const urlsArr = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];

// const placeholderUrls = [
//   'https://jsonplaceholder.typicode.com/users/1',
//   'https://jsonplaceholder.typicode.com/users/2',
//   'https://jsonplaceholder.typicode.com/users/3',
//   'https://jsonplaceholder.typicode.com/users/4',
//   'https://jsonplaceholder.typicode.com/users/5',
// ];

function fetchParallel(urls) {
  const requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => console.log(data));
}

function fetchSequentially(urls) {
  const dataArr = [];
  // промис отслеживает положение в массиве
  let promise = Promise.resolve();

  urls.forEach(url => {
    promise = promise
      .then(() => fetch(url))
      .then(response => response.json())
      .then(data => dataArr.push(data))
      .catch(console.log)
      .finally(() => {
        if (dataArr.length === urls.length) {
          console.log(dataArr);
        }
      });
  });
}

fetchParallel(urlsArr);
fetchSequentially(urlsArr);
