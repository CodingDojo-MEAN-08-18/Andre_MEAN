var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response) {
    console.log('client request URL: ', request.url);
    if (request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cars") {
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/bent.jpg") {
        fs.readFile('./images/bent.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/bmw.jpg") {
        fs.readFile('./images/bmw.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/merc.jpg") {
        fs.readFile('./images/merc.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/cat.jpg") {
        fs.readFile('./images/cat.jpg', function(errors, contents) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(contents);
            response.end();
        });
    } else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("Running in localhost at port 7077");