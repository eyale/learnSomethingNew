// Для того, чтобы получить массив ключей из объекта, нужно воспользоваться функцией Object.keys:
const employee = {
  name: 'John',
  phone: '+7 (765) 000-98-34',
  company: 'Opera Software',
  email: 'john@opera.com'
};

const keys = Object.keys(employee);
console.log(keys); // ["name","phone","company","email","key"]

// После того, как желаемый массив был получен, его можно перебрать, например, с помощью метода forEach:

keys.forEach((index) => { console.log(`${index} : ${keys[index]}`) })

// Cокращенно можно записать так (получим только ключи):
Object.keys(employee).forEach((key) => { console.log(employee[key])} );

// Метод массивов map похож по своей функциональности на forEach,
// но результат выполнения callback функции добавляется в новый массив,
// который возвращается после последней итерации.
// Другими словами, результатом метода map всегда является новый массив
// с результатами выполнения функции callback на исходном массиве
// ПРИМЕНЯЕМ КОГДА МЫ ХОТИМ ПОЛУЧИТЬ НОВЫЙ МАССИВ

var nums = [10, 20, 30, 40];
var resultMap = nums.map((num, index, arr) => ( Math.pow(num, index) ))
console.log(resultMap);


// filter для фильтрации массива по правилам заданным в callback
// filter возвращает новый массив

var resultFilter = [18,20,36,5,51,23,3,54].filter((element, index, arr) => ( element < 20 ))
console.log(resultFilter);


// перебор массива по значению

var dataFromServer =  [{"id":1,"name":"Ernest","email":"ebishop0@myspace.com","isCustomer":false},
{"id":2,"name":"Michael","email":"mturner1@multiply.com","isCustomer":false},
{"id":3,"name":"Mildred","email":"mwelch2@google.it","isCustomer":false},
{"id":4,"name":"Jeremy","email":"jwilson3@hostgator.com","isCustomer":false},
{"id":5,"name":"Judy","email":"jellis4@ameblo.jp","isCustomer":true},
{"id":6,"name":"Judy","email":"jrogers5@ow.ly","isCustomer":false},
{"id":7,"name":"Chris","email":"cbennett6@nasa.gov","isCustomer":false},
{"id":8,"name":"Ruth","email":"rmason7@simplemachines.org","isCustomer":true},
{"id":9,"name":"Justin","email":"jmedina8@indiegogo.com","isCustomer":true},
{"id":10,"name":"Dennis","email":"dflores9@g.co","isCustomer":true}];

var customersTrue = dataFromServer.filter((person) => ( person.isCustomer ));
console.log(customersTrue);


// Методы some и every - оба метода возвращают true или false.
// some возвращает true тогда, когда хотя бы один элемент массива отвечает переданным в callback условиям.
// every вернёт true, когда все элементы массива отвечают данным условиям.

//
// var some = function(arr, callback, thisArg) {
//   var i, length = arr.length;
//   for (i = 0; i < length; i = i + 1) {
//     if (callback.call(thisArg, arr[i], i, arr)) {
//       return true;
//     }
//   }
//   return false;
// };
//
// var every = function(arr, callback, thisArg) {
//   var i, length = arr.length;
//   for (i = 0; i < length; i = i + 1) {
//     if (!callback.call(thisArg, arr[i], i, arr)) {
//       return false;
//     }
//   }
//   return true;
// };


[12,13,3,4,76].some((element, index, arr) => ( element > 55 ));

[12,13,3,4,76].every((element, index, arr) => ( element > 55 ));

// reduce - принимает два аргумента сallback
// и начальное значение, которое будет присвоено аргументу result при первой итераци

[10, 20, 30, 40].reduce((sum, currEl) => ( sum + currEl ));


// Unique array values
const arr = [...new Set([1, 2, 3, 3])]; // [1, 2, 3]



[2, 11, 3, 5, 14, 0].sort(function(a, b) {return a < b ? -1 : a > b ? 1 : 0}) //[0, 2, 3, 5, 11, 14]
[2, 11, 3, 5, 14, 0].sort(function(a, b) {return a - b }) //[0, 2, 3, 5, 11, 14]
