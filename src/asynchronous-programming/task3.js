/* eslint-disable no-console */
// delay(ms)
// Возвращает промис, который успешно выполняется через ms миллисекунд с результатом 100

function delay(ms) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve(100), ms);
  });
}

delay(1000).then(val => console.log('Done with ' + val));
