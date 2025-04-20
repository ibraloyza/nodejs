import fs from 'fs';

// readFile() - callback ver

fs.readFile('./test.txt', 'utf8',(err,data) =>{
    if(err) throw err;
    console.log(data);  
});

