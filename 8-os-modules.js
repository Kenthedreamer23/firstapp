const os = require('os')

// info about current user
const user = os.userInfo()

console.log(user)

// method returns the system uptime

console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freedMem: os.freemem(),
}
console.log(currentOS)