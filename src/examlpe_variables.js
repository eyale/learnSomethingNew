let buttons = document.querySelectorAll('button')

const object1 = { a: 1, b: true, c: 'q'}

for (let index = 0; index < buttons.length; index++) {
  buttons[index].innerHTML = index
  buttons[index].onclick = (e) => {console.log(index)}
  // для того, что бы воспользоваться замыканием надо добавить локальную переменную 
  // или как во втором случае пробросить аргумент в фунцию, что будет
  // почти тоже самое что и создание локальной переменной
  // (function() {    
  //   var i = index;
  //   buttons[i].innerHTML = i
  //   buttons[i].onclick = (e) => {console.log(i)}
  // })()
  // (function(i) {
  //   buttons[i].innerHTML = i
  //   buttons[i].onclick = (e) => {console.log(i)}
  // })(index)
}

const firstContant = 'firstConstant'

