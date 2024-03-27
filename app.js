const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/plain');
   
    console.log("My name is Bipin");
    //res.end('My name is Bipin\n');
    console.log("Welcome to my Node.js project");
   // res.end('Welcome to my Node.js project\n');
   if (req.url === '/home') {
    console.log("Welcome home");
    res.write('Welcome home\n');
} else if (req.url === '/about') {
    console.log("Welcome to About Us page");
    res.write('Welcome to About Us page\n');
} else if (req.url === '/node') {
    console.log("Welcome to my Node Js project");
    res.write('Welcome to my Node Js project\n');
} else {
    console.log("Welcome to my Node Js project");
    res.write('Welcome to my Node Js project\n');
}

res.end(); 
})
server.listen(4000);