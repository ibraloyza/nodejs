import { createServer } from 'http';
const PORT = process.env.PORT;

// logger middleware
const logger = (req, res, next) =>{
    console.log(`${req.method} ,${req.url}`);
    next();    
}

// json middleware  
const  jsonMiddleware = (req,res,next) =>{
    res.setHeader('content-type','application/json');
    next();
}

// route handler  for GET /api/users
const getUsersHandler = (req,res,next) =>{
    res.write(JSON.stringify(users));
    res.end();
}

const  users =[
    {
        id:1,
        name: "ibrahim",
        email: "ibrahim1@gmail.com",
        phone:  9876567,
        pass: 123,
    },
    {
        id:2,
        name: "gedi",
        email: "gedi2@gmail.com",
        phone:  76890,
        pass: 123,
    },
    {
        id:3,
        name: "farah",
        email: "farah2@gmail.com",
        phone:  7897765,
        pass: 123,
    },
    {
        id:4,
        name: "ahmed",
        email: "ahmed@gmail.com",
        phone:  546743,
        pass: 123,
    },
]

// console.log(users);


const server = createServer((req, res) =>{
    logger(req, res,() =>{
        if (req.url === '/api/users' && req.method === 'GET') {
            res.setHeader('content-type','application/json');

            
       }
       else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET' ) 
       {
           const id = req.url.split('/')[3];
           const user = users.find((user) => user.id === parseInt(id))
           res.setHeader('content-type','application/json');
   
           if (user) {
               res.write(JSON.stringify(user));
           }else{
               res.statusCode = 404;
               res.write(JSON.stringify({massage: 'user not found'}));
           }
           res.end();              
       }
       else
       {
           res.setHeader('content-type','application/json');
           res.statusCode = 404;
           res.write(JSON.stringify({massage: 'Rout not found'}));
           res.end();
       }
    });

})


server.listen(PORT ,() =>{
    console.log(`server runing on port ${PORT}`);
})