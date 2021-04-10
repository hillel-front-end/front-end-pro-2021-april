/*
    +
    bool
    typeof
    isNaN()
    logical operators [>,<, >=, <=, ==, ====, !] 
    if else
    logical and or, 
    if else else if // at home
    тернарный оператор ? // at home
    циклы основы
    while () {}
    do {} while()
    for(){}
*/
// 1  - '2' => 1 - 2
// 1 + '2' => '1' + '2' = > '12'

// +'2' =>  2
// +'abc' => NaN


// ----------- typeof ---------------
a = 12;

type = typeof 'abc';
type2 = typeof a;

console.log(type, 'type');
console.log(type2, 'type2');
console.log(typeof NaN, '(typeof NaN');


// ---------- null undefined -----------
a = 1;
a = null;

console.log(firstName, 'firstName');

var firstName; // 1
// lastName;

console.log(firstName, 'firstName');

// console.log(lastName, 'lastName'); -->> throw Error 
lastName = 'Petrov'; // 2
console.log(lastName, 'lastName');





/*
  *****************************************************
  ============== Важно помнить преобразования к Number =============
   +null  ->  0

   +""    ->  0      (пустая строка - 0)

   +"123" -> 123 (число в строке - число)

   +true\false -> 1\0

   +"abc" -> NaN (при ошибке результат NaN)
   
   +undefined -> NaN

  *****************************************************
*/


var foo = null;

console.log(+null, 'null cast to number');
console.log(+" ", 'empty string cast to number');





// ------------- smart operation  ----------

counter = 0;

counter = counter + 1;//  0 + 1
counter = counter + 1; // 1 + 1
counter = counter + 1; // 2 + 1
counter = counter + 1; // 3 + 1

console.log(counter, 'counter - 1');
// -------------------
n = 2;// 1,...,n

counter = 0;

counter += n; //counter = counter + 1;
counter += n; 
counter += n; 
counter += n; 

console.log(counter, 'counter - 2');

// =========== ++, -- =============
counter = 0;

counter++;
counter++;
counter++;
counter++;


console.log(counter, 'counter - 3');

counter = 0;

++counter;
++counter;
++counter;
++counter;

console.log(counter, 'counter - 4');



// ------------ different ---------------

foo = parseInt('123');

counter = 0;//reset

a1 = counter++;
console.log(counter, 'counter post');

counter = 0;//reset

a2 = ++counter;
console.log(counter, 'counter pref');


console.log(a1, 'a1');
console.log(a2, 'a2');


// ============ Boolean [true, false] ===============

// Boolean a = true;
// Boolean b = false;

a = true;


a1 = 1 + 2;// a1 = num + num

// ------------- Logical operators [>,<, >=, <=, ==, ===, !] -----------------------
 
c1 = 3;
c2 = 3;

console.log('при с1 = ' + c1, 'при с2 = ' + c2 );

result = c1 > c2;
console.log(result, 'c1 > c2');

result = c1 < c2;
console.log(result, 'c1 < c2');

result = c1 >= c2;
console.log(result, 'c1 >= c2');

result = c1 <= c2;
console.log(result, 'c1 <= c2');

c3 = '10', c4 = 10;

result = c3 == c4;// c3 == c4 => string == number => number == number => 
console.log(result, 'c3 == c4');

//'va' === 'va'

result = c3 === c4;// false
console.log(result, 'c3 === c4');

// result = 1 + 1;
// ----------------------------------------





/* 
*****************************************************
============= Важно помнить преобразования к Boolean ===============

    1) 0, null, undefined, NaN, "" -> false
    2) все остальное -> true

*****************************************************
*/

a = true;

a = a + '';// 'true'
console.log(a, 'a');


console.log(Boolean(0));// false
console.log(Boolean(null));// false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN)); // false

var resu = Boolean('1111');

console.log(resu, 'resu');

//  ----------- &&, || ---------------- 

a = undefined;
b = "";
c = null;



// 0, null, undefined, NaN, "" -> false

result = a || b || c;
//     false false  false

console.log(result, 'result');



a = 111;
b = "false";
c = 123;

result = a &&  b &&   c;
//      true  true  true
//   

console.log(result, 'result');






// ------------- Conditional -------------

/*
    if (условие) {
        тело условия if
    } 

    if (условие) {
        тело условия if
    } else {

    }
*/

age = 20;

if (age > 18) { //12 > 18 ==> false
    console.log(' ---------------- watch films -----------------');
} else {
    console.log(' ---------------- watch mult-films -----------------');
}





/*
    if (условие- 1) {
       тело условия if
    } else if(условие - 2) {
       тело условия else-if
    } else if(условие - 3) { 
    
    } else {
        тело условия else
    }

*/

greering = '';
time = 2;



if (time < 10) {
    greering = 'Good morning';
} else if (time < 20) {
    greering = 'Good day';
} else if (time < 24) {
    greering = 'Good evening';
} else {
    greering = 'Good night';
}

console.log(greering, 'greering');


role = 'admin';

if (role === 'admin') {
    console.log('Hello admin');
} else if (role === 'user') {
    console.log('Hello user');
}


console.log(role, 'role');

time = 10;

if (time > 12 && time < 20) { // 
    console.log('Todo');
}



// Таблица истингости:

/*
    true && true => true
    false && true => false
    true && false => false
    false && false => false

    true || true => true
    false || true => true
    true || false => true
    false || false => false

*/

// ---------- loop ------------




// each, for
// =================== loop ===========

counter = counter + 1;//  0 + 1
counter = counter + 1; // 1 + 1
counter = counter + 1; // 2 + 1
counter = counter + 1; // 3 + 1