/*
Lection 1 - JavaScript Intro
  * JS Введение
  * Подключение скриптов
  * Скрипты в отдельных файлах
  * Именование переменных
  * Переменные, типы(String, Number)
  * Операторы
  * Приведение типов(явное, неявное), NaN
  * Консоль разработчика
  * debugger
  * ? Операторы(smart operations) (+= \ ++)
*/

/*
  # 1. JS Введение
   * LiveScript - JavaScript;
   * JavaScript — это язык программирования, который даёт возможность реализовывать сложное 
     поведение веб-страницы. Является интерпретируемым языком.
   * Интерпретация – это когда исходный код программы получает другой инструмент, который называют «интерпретатор», 
     выполняет его «как есть». При этом распространяется именно сам исходный код (скрипт). 
     Этот подход применяется в браузерах для JavaScript. 
*/


// var, let, const

age = 33; //code style

//вотТак

firstName = 'hello';// CamelCase
first_name = 'valera';

lastName = 111;
lastName = 2222;

///  ----------- Type ------------

// Integer, Floot,

/*
  Integer a = 10;
  Floot b = 10.5;
*/


// ----------- number -----------
a = 10;
b = 10.5;


//------------ string ----------

// String str = 'aa';
// String str2 = "bbb"


str = 'aa "bb" cc';


//

console.log(str, 'str');
console.log(a, 'a');
document.write(str);

// ------------------- Math -----------------

a = 10, b = 2;

result = a + b; // 10 + 2
console.log(result, '10 + 2');

result = a - b; // 10 + 2
console.log(result, 'a - b');

result = a * b; // 10 * 2
console.log(result, 'a * b');

result = a / b; // 10 / 2
console.log(result, 'a / b');

result = a % b; // 10 % 2
console.log(result, 'a % b');

// -------------------------- String ---------------


a = 'hello', b = 'world';

result = a + b; // конкатенация ->> "helloworld"
console.log(result, 'result');

result = a + " " + b; // конкатенация ->> "hello world"
console.log(result, 'result');


// String -> Number, Number --> String

c = '10', k = '2';

result = '10' + '2';// '102'
console.log(result, 'result');


result = '10' * '2';// String --> number => number * number => 10 * 2
console.log(result, 'result');

result = 'abc' * '12';// NaN - Not a Number
console.log(result, 'result');

result = 10 * '12'; // number * number => 10 * 12 = 120
console.log(result, 'result');

// --------------------------

result = (+'10') + (+'2');// number + number => 10 + 2 => 12
console.log(result, 'result');


console.log(+"12c3"); // => NaN

result = parseInt("12c3");// 12

result = parseInt("123c");// 123


result = parseInt("a123c");// NaN

console.log(result, 'result');


age = 12;
name = 'Valera';
lastName = 'Ternavskiy';
foo = "My name is ";

fullName = foo +  age + " " + name + " " + lastName;

console.log(fullName, 'fullName');













