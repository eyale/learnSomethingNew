console.log(`
LESSON: ${'example variables'}
`);


let buttons = document.querySelectorAll('button')

let object1 = { a: 1, b: true, c: 'q'}

for (let index = 0; index < buttons.length; index++) {
  buttons[index].innerHTML = index
  buttons[index].onclick = (e) => {console.log(index)}
}

const firstContant = 'firstConstant'

// firstContant = 'another value' // error - read only property
