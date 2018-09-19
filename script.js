// .padStart()
// .padEnd()
'Turtle'.padStart(10);
'Turtle'.padEnd(10);

// can give coma at the end
const fun = (a,b,c,d, ) => {
	console.log(a);
}
fun (1,2,3,4,)

Object.values
Object.entries
Object.MediaKeySession

let obj = {
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr thoriq'
}

Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

Object.values (obj).forEach(value => {
	console.log(value);
}) 

Object.entries(obj).forEach(value => {
	console.log(value);
}) 

Object.entries(obj).map(value => {
	return value[1] + value[0].replace('username', '');
}) 
