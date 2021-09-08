const os = require('os')  // the built - in module does not need ./

// info about current user
// {
//     uid: 1000,
//     gid: 1000,
//     username: 'suguru',
//     homedir: '/home/suguru',
//     shell: '/bin/bash'
//   }
const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is : ${os.uptime()} seconds`);

// get info about the OS
// can't get info about the OS in normal JS.
// {
//     name: 'Linux',
//     release: '4.19.128-microsoft-standard',
//     totalMem: 6553616384,
//     freeMem: 3566469120
// }
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);

