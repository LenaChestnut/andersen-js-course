/* eslint-disable no-console */
// Создать функцию foo(x, cb)
// x - число
// x > 10 - вывести сравнение в консоль, вызвать cb
// x <= 10 - вывести сравнение в консоль

// createCb(str) - при вызове выводит str в консоль

function foo(x, cb) {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else {
    console.log('x <= 10');
  }
}

function createCb(str) {
  return function() {
    console.log(str);
  };
}

foo(5, createCb('cb'));
foo(20, createCb('cb'));
