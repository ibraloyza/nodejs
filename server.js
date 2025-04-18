import { error, log } from 'console';
import fs from 'fs/promises';
import { fileURLToPath, URL } from 'url';
import path from 'path';
import {createServer } from 'http'
import { url } from 'inspector';
const PORT = process.env.PORT ;
// const pass = process.env.pass;
// console.log(pass);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);



const server = createServer((req, res) => {
    // check if GET request
    try {
        if (req.method === 'GET') {
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
        }
        else{
            throw new Error('method not allwed')
        }
    } catch (error) {
        res.writeHead(500,{'content-type':'text/plain'});
        res.end('Server Error')
    }
 
});



server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
