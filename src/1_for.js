"use strict";

// для перебора СВОЙСТВ объекта
var obj = {
  name:'John',
  age: 24
  }
  
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }

let list = [1,2,3,4,5];

// для перебора ЗНАЧЕНИЙ массива

for (let val of list) {
  console.log(`${val} `)
}