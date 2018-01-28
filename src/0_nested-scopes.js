/*
let name = 'Brendan';

{
  let name = 'George';
  {
    let name = 'Kyle';
    console.log(name);
  }
  console.log(name);
}

console.log(name);
*/

/**
'use strict';
// интерпретатор присваивает переменную и сразу выводит на экран
// ту переменную, которая в его области видимости
var name = 'Brendan';

{
  var _name = 'George';
  {
    var _name2 = 'Kyle';
    console.log(_name2);
  }
  console.log(_name);
}

console.log(name);

> Kyle
> George
> Douglas
*/


/*
let name = 'Brendan';

function print() {
  let name = 'George';
  {
    let name = 'Kyle';
    console.log(name);
  }
  console.log(name);
}

console.log(name);
print();
*/

/** 
> Brendan
> Kyle
> George
*/



let name = 'Brendan';

function print() {
  let name = 'George';
  function log() {
    let name = 'Kyle';
    console.log(name);
  }
  console.log(name);
  log()
}

console.log(name);
print();

/**
 * 
> Brendan
> George
> Kyle
 */