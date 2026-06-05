var a = 10; //reinitialize and redeclare
// let b = 20; //reinitialize
var c = 30;

console.log(a);
console.log(b);
console.log(c);

var num = 10;
var str = " sathya";
var underfine;
var Null = null;
var boolean = true;

console.log(typeof num);
console.log(typeof str);
console.log(typeof underfine);
console.log(typeof Null);
console.log(typeof boolean);

var bigint = 123n;
const sym = Symbol("li");

console.log(typeof bigint); // "bigint"
console.log(typeof sym);    // "symbol"

var arr = [10, 12, 30, 40];
console.log(typeof arr, arr);
var obj = {
    name: "sathya",
    age: [25]
}
//console.log(typeof obj, obj);
// Arithmetic operators(=,+,-,*,/,%)
var a = 10;
var b = "sathya";


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);



//logical operators (&&, ||,!)

//        a  b  &&  ||
// true  true  true  true
// true  false false true
// false true  false true
// false false false false
var a = true;
var b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

//relational operators (>,<,>=,<=,==,===,!=,!==)

a = 10;
b = 20;
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

// assignment operators (=, +=, -=, *=, /=, %=, **=)
a = 10;
b = 20;
a += b; //30
// console.log(a);
a -= b;
console.log(a);

//Uniary operator(--,++)

var a = 10;

console.log(a++);
console.log(++a);

var a = 10;

console.log(a--);
console.log(--a);


a = 1;
b = 1;
c = 0;


var result = a++ + --b + ++c - ++a + ++b + c++ + ++b + a;
console.log(result)

//conditional statement

var a = 10;
var b = 20;
//if condition
if (true) {
    // Template Literals
    console.log(`${a} + ${b} = ${a + b}`)
}

//if(true){
// a = 10;
// console.log(a);
// var a = 10;

var a = 10; // global scope
// let b = 20; // block scope

const d = 20; // block scope
if (true) {
    console.log(a);
    let b = 20;
    console.log(b);
}
// console.log(a);
// console.log(b);

var mark = 30;
if (mark <= 99) {
    console.log("O grade");
}
else if (mark <= 70) {
    console.log("A grade");

}
else if (mark <= 35) {
    console.log("pass");
}
else {
    console.log("fail")
}

var a = 10;
// condition ? true statement : false statement;
var result = a % 2 == 0 ? " even" : "odd";
console.log(result)

mark = 90;
var result = (mark <= 90) ? " O grade" :
    (mark <= 70) ? " A grade" :
        (mark <= 35) ? " pass" :
            "fail";
console.log(result);

var day = 2;
switch (day) {
    case 1: {

        console.log("sunday");
        break;

    }
    case 1: {

        console.log("sunday");
        break;

    }
    case 2: {

        console.log("monday");
        break;

    }
    case 3: {

        console.log("tuesday");
        break;

    }
    case 4: {

        console.log("wednesday");
        break;

    }
    case 5: {

        console.log("thursday");
        break;

    }
    case 6: {

        console.log("friday");
        break;

    }
    case 6: {

        console.log("friday");
        break;

    }

    case 7: {

        console.log("saturday");
        break;

    }
    default: {
        console.log("invalid input");
    }
}
// looping statement
// 1 time 11 times 10 times
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var val = 1024;
var count = 0;
while (val > 0) {
    count++;
    val = Math.floor(val / 10);


}
{

console.log(count);
}

do {
    // This loop runs once because the condition is false.
    console.log("do..")
} while (false);

for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}


function add(a=5, b=6){
    console.log(a+b);
}

add(); //Hoisting
var demo = (a = 5, b=6) => {
    console.log(10 + 20);
};

demo( 10,20);
demo();
demo(10);


// Spread operator(...)
var arr = [10,20,30];
var arr2 = [...arr,40,50];
console.log(arr);
console.log(arr2);

//Destructor operator

var [m1,m2,m3,m4,m5] = [99,98,99,100,99]
console.log(m1,m2,m3,m4,m5);

var obj = {
    name:"sathya",
    dept:"ct",
    instagram:"sathya_kavithaigal"
}
console.log(obj.name,obj,obj.instagram);

var arr = [10,20,30,40,50];
for(let index in arr){
    console.log(index)
}
for(let value of arr){
    console.log(value)
}
for(let key in obj){
    console.log(key,obj[key])
}
var arr = [1,2,3,4,5];
var result = arr.map((val) => val * 2);
console.log(result);

var even = arr.filter((val) => val % 2 == 0);
console.log(even);

var sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum);
