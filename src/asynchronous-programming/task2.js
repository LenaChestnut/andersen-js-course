/* eslint-disable no-console */
// parseJSON(jsonStr, successCb, failureCb)
// jsonStr - строка JSON

// successCb(result) - вызывается в случае успешного парсинга
// выводит 'Success parse!'
// выводит result

// failureCb - вызывается в случае неуспешного парсинга
// выводит 'Failure parse!'
// выводит ошибку

function successCb(result) {
  console.log('Success parse!');
  console.log(result);
}

function failureCb(error) {
  console.log('Failure parse!');
  console.log(error);
}

function parseJSON(jsonStr, resCb, rejCb) {
  try {
    const result = JSON.parse(jsonStr);
    resCb(result);
  } catch (error) {
    rejCb(error);
  }
}

parseJSON('{"x":10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);
