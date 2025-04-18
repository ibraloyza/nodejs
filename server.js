import { log } from 'console';
import {createServer } from 'http'
const PORT = process.env.PORT ;
// const pass = process.env.pass;
// console.log(pass);


const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(`<h1>This is Home page!</h1>`);   
    }
    else if(req.url === '/About'){
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(`<h1>This is About page!</h1>`);
    }
    else{
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end(`<h1>your request page is no found!</h1>`);
    }




    
    
});



server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
