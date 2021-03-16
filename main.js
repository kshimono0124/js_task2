'use strict';

let count = 0;

function update(_v) {
  document.querySelector('input').value = _v;
  count = 0;
}

function append(_v) {

  const suppressZero = str => {
    let idx = 0;
    while (str.charAt(idx) === '0') idx++;
    return str.slice(idx);
  };

  document.querySelector('input').value += _v;

  if (count > 0 && document.querySelector('input').value !== '.') {
    // if (document.querySelector('input').value !== '.') {
    document.querySelector('input').value = suppressZero(document.querySelector('input').value);
    // }
  }
  count++;
}

function symbol(_v) {
  let lastStr = document.querySelector('input').value[document.querySelector('input').value.length - 1]
  if (document.querySelector('input').value.slice(0) === '.') {
    document.querySelector('input').value = '0' + document.querySelector('input').value;
  }
  // console.log(lastStr);

  if (lastStr == "/" || lastStr == "*" || lastStr == "+" || lastStr == "-") {

    document.querySelector('input').value = document.querySelector('input').value.slice(0, -1)

    document.querySelector('input').value = document.querySelector('input').value + _v
  }
  else {
    document.querySelector('input').value = document.querySelector('input').value + _v
  }

}

function calc() {
  const v = document.querySelector('input').value;
  try {
    const f = new Function('return ' + v);
    update(f().toString());
    count = 0;
  }
  catch (_error) {
    update(_error);
  }
}
