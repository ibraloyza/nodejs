import http, { createServer } from 'http';
const PROT = 5000;

const server = createServer((req,res) =>{
    res.setHeader( 'content-type', 'text/html');
    res.statusCode = 404;

    // res.writeHead( 'content-type', 'text/html');
    res.end(`<h1>hello welcome!</h1>`);
})

server.listen(PROT,(req,res) =>{
    console.log(`server runing on port ${PROT}`);
    
})