const fs = require('fs');

const requesthandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    return res.end('Error writing file');
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }

    if (url === '/message') {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.statusCode = 404;
                res.end('Error: Message not found');
            } 
            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Message</title></head>');
            res.write('<body><h1>Your Message:</h1>');
            res.write('<p>' + data + '</p>');
            res.write('</body></html>');
            res.end();
        });
    }
}

module.exports = {
    handler: requesthandler,
    someText :'Some hard coded text'

} 
