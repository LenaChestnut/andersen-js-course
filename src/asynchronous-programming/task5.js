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

function fetchParallel(urls) {
  const requests = urls.map(url => fetch(url));

  Promise.all(requests)
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(data => console.log(data));
}

function fetchSequentially(urls) {
  const dataArr = [];

  fetch(urls[0])
    .then(response => response.json())
    .then(data => {
      dataArr.push(data);
      return fetch(urls[1]);
    })
    .then(response => response.json())
    .then(data => {
      dataArr.push(data);
      return fetch(urls[2]);
    })
    .then(response => response.json())
    .then(data => {
      dataArr.push(data);
      return fetch(urls[3]);
    })
    .then(response => response.json())
    .then(data => {
      dataArr.push(data);
      return fetch(urls[4]);
    })
    .then(response => response.json())
    .then(data => {
      dataArr.push(data);
      console.log(dataArr);
    });
}

fetchParallel(urlsArr);
fetchSequentially(urlsArr);
