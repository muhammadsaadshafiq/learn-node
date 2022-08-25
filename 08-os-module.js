const os = require('os');

//current user info
const user = os.userInfo();
console.log(user);

//system uptime info in seconds
console.log('Uptime: ' + os.uptime());

const currentOs={
    name: os.type(),
    release: os.release(),
    cpu: os.cpus(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs);



