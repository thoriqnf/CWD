// function isUserValid(bool){
// 	return bool;
// }

// var answer = isUserValid(true) ? "You may enter" : "Access denied";

// var automatedAnswer = 
// 	"your account # is " + (isUserValid(false) ? "1234" : "Not Available");

// 	function condition() {
// 		if (isUserValid(true)) {
// 			return "You may enter";
// 		} else {
// 			return "You can't enter";
// 		}
// 	}

// 	var answer2 = condition();

// function moveCommand(direction) {
// 	var whatHappens;
// 	switch (direction){
// 		case "forward":
// 			whatHappens = "you encounter a monster";
// 			break;
// 		case "back":
// 			whatHappens = "you arrived home";
// 			break;
// 		case "right":
// 			whatHappens = "you found a river";
// 			break;
// 		case "left":
// 			whatHappens = "you run into a troll";
// 			break;
// 		default: 
// 			whatHappens = "please enter a valid direction"
// 	}
// 	return whatHappens;
// }


//before ES 6
function first() {
	var greet = "Hi";
	function second(){
		alert(greet);
	}
	return second;
}

var newFunc = first();
newFunc();

// with es 6

const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
newFunc();

//Closurea - a function ran. the function executed. It's never going execute again
//But it's going remember that there are references to those variable
// so the child scope always has access to the parent scope


//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5);

//Compose
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum) (5);