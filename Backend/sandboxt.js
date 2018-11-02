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