console.log(`
LESSON: ${'example_spread_operator'}
`);


let predators = [ 'lion', 'eagle', 'bear']
let pets      = [ 'cat', 'dog']

let animals   = [ ...predators, ...pets]

console.log(animals)
