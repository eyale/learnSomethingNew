// default parameters of function
console.log(`
LESSON: ${'default parameters'}
`);


const greet = (name = 'Denis', job = 'developer') => {
 console.log(` Hi!
 My name is ${name}.
 I'm a ${job}.`)
}

greet()
