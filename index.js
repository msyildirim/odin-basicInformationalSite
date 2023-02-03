const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) =>{
    res.writeHead(200, { 'content-type': 'text/html' });
    if(req.url=="/")  fs.createReadStream('index.html').pipe(res);
    else if(req.url=="/about")  fs.createReadStream('about.html').pipe(res);
})

server.listen(8080)