/* eslint-disable no-undef */
/* eslint-disable no-console */
// сделать запрос к http://www.json-generator.com/api/json/get/cfQCylRjuG
// проверить поле getUsersData
// true - запросить данные с http://www.json-generator.com/api/json/get/cfVGucaXPC
// вывести результат в консоль

function getUsersData() {
  fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG', { mode: 'no-cors' })
    .then(response => response.json())
    .then(result => result.getUsersData)
    .then(data => {
      if (data) {
        fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then(response => response.json())
          .then(info => console.log(info));
      }
    });
}

getUsersData();
