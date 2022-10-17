//Задача 1.
/*
const array = [3, 9, 2, 0, 88, null]
let even = 0
let odd = 0
let nothing = 0
let x = null

function getResult() {
  for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === 0) {
        nothing += 1;
      } else if (array[i] %2 === 0) {
        even += 1;
      } else if (array[i] %2 !== 0) {
        odd += 1;
      } else if (arrayTwo[i] %2 !== 0) {
        x += 1
      }
    }
    console.log(`В массиве ${nothing} ноль, ${even} четных и ${odd} нечетных числа, а также знак ${x}`)
};
getResult();
*/


//Задача 2.
/*
function number(number) {
  let result = '';
  if (number >= 1000 || number <= 0) {
    return result = 'Данные не верны';
  }
  for (let i = 2; i < number; i++) {
    if (number %i === 0) {
      result = 'Простое число';
    } else {
      result = 'Составное число';
    }
  }
  return result;
}

console.log(number(100));
*/

//Задача 3.
/*
function getSum(num1) {
  return function(num2) {
    return (num1 + num2);
  }
}

const func = getSum(1);
const sum = func(4);
console.log(sum);
*/

//Задача 4.
/*
function getInterval(a, b) {
  let timer = setInterval(function() {
    console.log(a);
    if (a == b) {
      clearInterval(timer)
    }
    a++;
  }, 1000)
}

getInterval(1, 10)
*/

//Задача 5.
/*
const getExp = (x, n) => {
  console.log(x ** n);
  return x ** n;
}
getExp(6, 5)
*/
