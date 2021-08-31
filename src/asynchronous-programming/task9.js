/* eslint-disable no-console */
// написать асинххронную функцию foo, которая выводит в консоль результат asyncBar

const asyncBar = async () => 'Some string!';

const foo = async () => {
  const string = await asyncBar();
  console.log(string);
};

foo();
