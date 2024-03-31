const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) =>{
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
const url = req.url;
const method = req.method;
if(url === '/'){
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
}
if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) =>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode= 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
}
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>My first Page</title></head>')
//     res.write('<body><h1>Your Message:</h1>');
    
//     // Display the input data from the form
//     res.write('<p>' + req.url.slice(req.url.indexOf('=') + 1) + '</p>');

//     res.write('</body></html>');
//     res.end();
// })
if (url === '/message') {
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.statusCode = 404;
            res.end('Error: Message not found');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Message</title></head>');
            res.write('<body><h1>Your Message:</h1>');
            res.write('<p>' + data + '</p>');
            res.write('</body></html>');
            res.end();
        }
    });
}
});
server.listen(3000);