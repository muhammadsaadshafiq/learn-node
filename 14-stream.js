const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt',
{highWaterMark: 90000, encoding: 'utf8'});


stream.on('data', (result)=>{
    // console.log(result);
    console.log(`Recieved ${result.length/1024} Kilo bytes of data`);
})


stream.on('error', (error)=>{
    console.log(error);
})