const http = require('http')

// const routes = require('./routes')
const requestHandler = require('./routes');

console.log(requestHandler.someText);

const server = http.createServer(requestHandler.handler);
// const server = http.createServer(routes)
//     console.log(req.url, req.method, req.headers);
//     res.setHeader('Content-Type', 'text/plain');
   
//     console.log("My name is Bipin");
//     //res.end('My name is Bipin\n');
//     console.log("Welcome to my Node.js project");
//    // res.end('Welcome to my Node.js project\n');
//    if (req.url === '/home') {
//     console.log("Welcome home");
//     res.write('Welcome home\n');
// } else if (req.url === '/about') {
//     console.log("Welcome to About Us page");
//     res.write('Welcome to About Us page\n');
// } else if (req.url === '/node') {
//     console.log("Welcome to my Node Js project");
//     res.write('Welcome to my Node Js project\n');
// } else {
//     console.log("Welcome to my Node Js project");
//     res.write('Welcome to my Node Js project\n');
// }

// res.end(); 

//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My first Page</title></head>')
//     res.write('<body><h1>Your Message:</h1>');
    
//     // Display the input data from the form
//     res.write('<p>' + req.url.slice(req.url.indexOf('=') + 1) + '</p>');

//     res.write('</body></html>');
//     res.end();
// })


server.listen(3000);