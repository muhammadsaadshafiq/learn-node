const EventEmitter = require('events');


const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved from ${name} with id ${id}`);
})

customEmitter.emit('response','saad',37);