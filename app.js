const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/plain');
   
    console.log("My name is Bipin");
    res.end('My name is Bipin\n');
    // process.exit();
})
server.listen(4000);