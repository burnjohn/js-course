// 1.
console.log(typeof 5)
console.log(typeof "hello")
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof null)
console.log(typeof function(){})

// 2.
console.log(null == undefined)

console.log(undefined === undefined)
console.log(null === null)

console.log(NaN == undefined)
console.log(NaN == null)

console.log(NaN === NaN)
console.log(NaN == NaN)

// 4. What would following code return?
console.log(typeof typeof 1);

// 4.
var obj = {};
Object.defineProperty(obj, 'a', {writable: true,  configurable: true,  value: 'a'});
Object.defineProperty(obj, 'b', {writable: false, configurable: true,  value: 'b'});
Object.defineProperty(obj, 'c', {writable: false, configurable: false, value: 'c'});

console.log(obj.a);
obj.a = 'b';
console.log(obj.a);
delete obj.a;

console.log(obj.b);
obj.b = 'a';
console.log(obj.b);
delete obj.b;

console.log(obj.c);
obj.b = 'a';
console.log(obj.c);
delete obj.b;

// 5. Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?
function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
console.log( greet({ name: 'amy' }) )

// 6. What is the output out of the following code? Explain your answer.
var a={},
  b={key:'b'},
  c={key:'c'};

a[b]=123;
a[c]=456;

console.log(a[b]);

console.log({}.toString())

// 7. What will be the output of this code?
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl ();

// 8. Imagine you have this code:
var a = [1, 2, 3];
// a) Will this result in a crash?
a[10] = 99;
// b) What will this output?
console.log(a[6]);

// 9. Чему равно foo.length?
var foo = {};
foo.bar = 'hello';
console.log(foo.length)

// 10.
var RED = 'red';
const red = 'red';

var RED = 'blue';

red = 'blue';

console.log(RED);

// 11.
var a = {};
var b = a;
console.log(a === b);  // true
var c = {};
var d = {};
conslole.log(c === d);

// 12.
'use strict'

var zombie = {
  eyeLeft : 0,
  eyeRight: 1,
  // … много ключей …
  eyeLeft : 1
}

num = 5;

function run(fromWhom, fromWhom) {
  return fromWhom
}
console.log( run(1, 2) );
console.log( num );
console.log( zombie );

// 13.
for (let i = 0; i < 10; i++) {
  let count = 10;
  count += i
}

console.log(count)