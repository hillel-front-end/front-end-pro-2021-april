// --------------- lection - (this) --------------

function run() {

    if (this.name) {
        // console.log(this.name + ' running...');
    }

    this.foo = [];
    // console.log(this, 'this');

    // for(var key in this) {
    //     console.log(this[key], 'key');
    // }
}

var person = {
    name: 'Pety',
    run: run
};


var person2 = {
    name: 'Valera',
    run: run
};

run(); // this === window


person.run(person.name); // this === person
person2.run('Valera'); // this === person2

// --------------------
var person = {name: 'Alex'};

person.toDo = function() {
  console.log(this, 'this');
};

var arr = [];

arr.toDo = function() {
  console.log(this, 'this');

  if (Array.isArray(this)) {
    this[0] = 12;
  }
};

// console.dir(arr, 'arr');

person.toDo(); // this == person 
arr.toDo(); // this == arr

function z(a, b, c) { //a = c1; b = c2, c = c3; 

}

c1 = 1;
c2 = 2;
c3 = 3;

z(1, 2, 3);


obj = {
  m1: function() {
    console.log('m1');
    return this;
  },
  m2: function() {
    console.log('m2');
    return this;
  },
  m3: function() {
    console.log('m3');
    return this;
  }
};

// obj.m1().m2()
// var c1 = obj.m1();

// var c2 = c1.m2();
// console.log(c2, 'c2');

// c2.m2().c1().c2();

// console.log(c1 === obj, 'c1');



// obj.m2().m1().m3();
// obj.m2().m1().m3().m1().m1();

var operationWithFile = {
  copy: function() {
    console.log('copy -- file');

    return this;
  },
  read: function() {
    console.log('read -- file');

    return this;
  },
  append: function(str) {
    console.log('read -- append string', str);

    return this;
  }
};

operationWithFile
  .append('Hello world')
  .read()
  .copy();


var a = {
  result: 0,
  foo: 0
}

// a.copy('fooo');
// a.copy('bufer')


// a.doFunction(sum, 6, 6).clear().target('foo').doFunction(sum, 6, 6).clear()