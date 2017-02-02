// creating the class with Getters and Setters
class GetThing {
	constructor (size) {
		this.length = size;
	}
	get Length() {
		return this.length;
	}
	set Length(value) {
		this.length = value;
		console.log('The value has been set');
	}
}

var thing = new GetThing(5);
console.log(thing.Length);

thing.Length = 7
console.log(thing.Length);
