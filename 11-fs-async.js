const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
    }else{
        console.log(result.toString());
        
        const first = result;
        readFile('./content/second.txt', 'utf8',(err,result)=>{
            if(err){
                console.log(err);
            }else{
            console.log(result.toString());

            const second = result;

                writeFile(`./content/result-async`,
                `here is the async result : ${first}, ${second}`,
                {flag:'a'},
                (err, result)=>{

                    if(err){
                        console.log('write error',err);
                    }else{
                        console.log(result);
                    }
                }
                )

        }
        
    })
}
})

