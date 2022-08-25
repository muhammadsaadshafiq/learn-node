var http = require('http');

//create serever

const server = http.createServer((req, res) => {
console.log(req);

if(req.url === '/'){
    res.end('Hello World');
}
else if(req.url === '/about'){
res.end('About Us');
}
else{
    res.end(`<h1>404 Not Found</h1>
    <p>The page you are looking for is not found</p>
    <a href="/">Go to Home Page</a>
    `);
}

});

server.listen(5000);