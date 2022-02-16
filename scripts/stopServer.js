#!/usr/bin/env node
const { spawnSync  } = require('child_process');
const path = require("path")

const root = process.cwd();
const pathToForever = path.join(root, "node_modules", "forever", 'bin', 'forever')

console.log('Stoping Server')
const stopCmdOut = spawnSync('node', [pathToForever, 'stopall']);
if (stopCmdOut.error && stopCmdOut.error.toString('utf8')) {
    console.log('Error Stoping app1', stopCmdOut.error.toString('utf8'))
}
if (stopCmdOut.stderr && stopCmdOut.stderr.toString('utf8')) {
    console.log('Error Stoping app1', stopCmdOut.stderr.toString('utf8'))
}
if (stopCmdOut.stdout && stopCmdOut.stdout.toString('utf8')) {
    console.log('Stoped app1', stopCmdOut.stdout.toString('utf8'))
}


