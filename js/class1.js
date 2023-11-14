console.log("hello world")

// javascript - powerful language and also tricky language

// powerful language - used in frontend, backend -servers, mobile applications, desktop applications
// tricky 
// dynamically typed

// int a  = 5; - statically typed language
// str s = "shradha" - statically typed language


// statically typed and dynamic typed languages

// statically typed - u tell the compiler you are going to use the data type
// int a = 5; i want to save a with an integer 5
// specifying it to that a actually contain integers only


// dynamically typed
// a = 5; a= "satya" - a is storing sn integer and again u stored a string
//  u are not specifing
// during compilation the data type is decided by the compiler itself


// var, let, and const

// var = global scope and function scope -till ec5 - hoisting
// let = function scope - from ec6 - no hoisting
// const = function scoped - from ec6 -  no hoisting


var a = 5;
var b = 6;
function sum(a,b){
    return a + b;
}
console.log(sum(a, b))


// hoisting
// even before u intialize the variable if u call it.. it will give s default value - "undefined"


// let a= 5;
// a = 6;
// console.log(a)

// variable initilization
const c = 5 //stores the address
// c = 6
console.log(c)

// array initilization
const arr = [10]
const brr = [10]

console.log(arr == brr);


// Datatypes
// numbers - 1,2,3,4
// strings - "satya"
// boolean - true, false
// undefined - undefined
// null - null
// bigint -  number but bigger
// objects = [], {}
// symbols -  never used


