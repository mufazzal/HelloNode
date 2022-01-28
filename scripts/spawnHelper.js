const { spawn } = require('child_process');

var spawnAsPromise = (command, args, options) => {
    return new Promise((resolve, reject) => {
        let opts = options ? options : {}
        opts['stdio'] = options && options['stdio'] ? options['stdio'] : 'inherit'
        console.log(("executing >>> %s %s | %j"), command, args.join(' '), opts);
        let proc = spawn(command, args, opts)

        proc.on('close', (code) => {
            if (code !== 0) {
                reject(`error: process exited with code ${code}`);
            }
            else {
                resolve('Finished successfully!')
            }
        });
    })
}


module.exports = {
    spawnAsPromise
}