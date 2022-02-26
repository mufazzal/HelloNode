#!/usr/bin/env node
const { spawnSync  } = require('child_process');
const path = require("path")

const root = process.cwd();
var args = process.argv.slice(2);

const pathToForever = path.join(root, "node_modules", "forever", 'bin', 'forever')
const pathToServerjs = "server.js";

isDocker = false
if(args.length > 0 && args[0] === 'docker') {
    isDocker = true;
}


let startCmdOut = null;
console.log('isDocker', isDocker)

if(isDocker) {
    console.log('Starting Server Container')
    startCmdOut = spawnSync('node', [pathToServerjs]);
} else {
    console.log('Starting Server')
    startCmdOut = spawnSync('node', [pathToForever, 'start', pathToServerjs]);
}

if (startCmdOut.error && startCmdOut.error.toString('utf8')) {
    console.log(startCmdOut.error)
    console.log('Error Starting app1', startCmdOut.error.toString('utf8'))
}
if (startCmdOut.stderr && startCmdOut.stderr.toString('utf8')) {
    console.log(startCmdOut.stderr)
    console.log('Error Starting app1',startCmdOut.stderr.toString('utf8'))
}
if (startCmdOut.stdout && startCmdOut.stdout.toString('utf8')) {
    console.log('Started app1', startCmdOut.stdout.toString('utf8'))
}

// docker build -f Docker/Dockerfile -t mufazzal/hellonode:latest .
// docker run -it -p 3010:3010 mufazzal/hellonode:latest
