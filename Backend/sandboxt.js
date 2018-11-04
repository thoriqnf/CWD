/// promise
const promise2 = new Promise ((resol, rejek) => {
  if (true) {
    resol ('Oke cuy');
  } else {
    rejek ('Lah eror');
  }
})

promise2
  .then(resulll => resulll + '!')
  .catch(() => console.log('Hala eror mele!'))
  .then(resull2 => resull2 + ' Jadikan yang ke 2')
  .then(resul3 =>  {
    throw Error; 
    console.log(resul3 + '333333');
  })

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(urlbaru => {
  return fetch(urlbaru).then(respp => respp.json())
})).then(resultz => {
  console.log(resultz[0]);
  console.log(resultz[1]);
  console.log(resultz[2]);
}).catch(() => console.log('eror mele'))

// Async - Await
///////////////////////////

// Asynchronus with promise
movePlayer(100, 'Left')
  .then(() => movePlayer(400, 'Left'))
  .then(() => movePlayer(10, 'Right'))
  .then (() => movePlayer(1000, 'Left'))

  // Using Async - await

  async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); //pause
    await movePlayer(400, 'Left'); //pause
    await movePlayer(10, 'Right'); //pause
    await movePlayer (1000, 'Left'); //pause
  }

  // Example 1 using promise
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log) 

  // Example 1 using async - await
  async function fetchUser() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
  }

