/* eslint-disable no-undef */
/* eslint-disable no-console */
// функция getResolvedPromise(value)
// возвращает успешно выполненный промис со значением value
// обработка вызовов с then:
// - value > 300 -> throw new Error('Ошибка!');
// - ошибки ловить с catch, вывести в консоль
// - finally: console.log('This is Finally!');

function getResolvedPromise(value) {
  return Promise.resolve(value);
}

getResolvedPromise(500)
  .then(val => {
    if (val > 300) {
      throw new Error('Ошибка!');
    }
  })
  .catch(err => console.log(err))
  .finally(() => console.log('This is Finally!'));
