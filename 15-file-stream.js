const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    // const text = fs.readFileSync('./content/toobig.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./content/toobig.txt', 'utf-8');
    fileStream.on('open',(data)=>{

        //convert read to write and feed it to the response
        fileStream.pipe(res);

    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })



}).listen(5000);