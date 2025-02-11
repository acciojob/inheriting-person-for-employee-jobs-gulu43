// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	greet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old.`)
	}
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.name = name;
	this.age = age;
	this.jobTitle;
	jobGreet(){
		console.log(`Hello, my name is ${name}, I am ${age} years old, and my job title is ${jobTitle}.`)
	}
}
Employee.prototype = Object.create(Person.prototype);
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
