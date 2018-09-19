const a = 1 ;
const b = 10;
const c = 100;

javascript have 2 engine called: mempry heap and callstack

javascript is a single threaded language that can be non-blocking

Single thread means so the callstack only can do one thing at one time, from the top to down until empty

console.log('1');
console.log('2');
console.log('3');

const one = () => {
	const two = () => {
		console.log('4');
	}
	console.log('1');
}

//call stack

//recursion
function foo() {
	foo()
}

foo()
make foo over and over again until max stack

///////////////////////

console.log('1');
setTimeout (() => {
	console.log('2');
}, 2000);
console.log('3');


// call stack

// web api

// callback queue

// event loop
check call stack empty, if empty can stop

element.addEventListener('click', () => {
	console.log('click');
})