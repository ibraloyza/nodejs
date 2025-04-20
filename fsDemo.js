// import fs from 'fs';

import fs from 'fs/promises';

// readFile() - callback ver

// fs.readFile('./test.txt', 'utf8',(err,data) =>{
//     if(err) throw err;
//     console.log(data);  
// });

// readFileSync() - syncronous ver

// const data = fs.readFileSync('./test.txt','utf8');
// console.log(data);

//readFile() -promise .then()
fs.readFile('./test.txt','utf8')
.then((data) => console.log(data))
.catch((err) =>console.log(err));

