#!/usr/bin/env node
const { spawnSync  } = require('child_process');
const path = require("path")

isDocker = false
if(args.length > 1 && args[1] === 'docker') {
    isDocker = true;
}

const root = process.cwd();
const pathToForever = path.join(root, "node_modules", "forever", 'bin', 'forever')
//const pathToServerjs = "./outputs/flavour1/dist/source/server.js"//"server.js";
const pathToServerjs = "server.js";

console.log('Starting Server')

let startCmdOut = null;
console.log('isDocker', isDocker)

if(isDocker) {
    startCmdOut = spawnSync('node', [pathToServerjs]);
} else {
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