const fs = require('fs-extra')
const path = require("path")
const { getOutputSourcePath, getOutputDistPath } = require("./buildConfig")

const root = process.cwd();

const pathToSrcBundle_out = getOutputSourcePath()
const pathToDist_out = getOutputDistPath()

console.log('Copying Dependencies to : ' + pathToSrcBundle_out);
fs.copySync(path.join(root, 'package-lock.json'), path.join(pathToSrcBundle_out, 'package-lock.json'))
fs.copySync(path.join(root, 'package.json'), path.join(pathToSrcBundle_out, 'package.json'))
fs.copySync(path.join(root, 'scripts'), path.join(pathToSrcBundle_out, 'scripts'))
fs.copySync(path.join(root, 'appConfig'), path.join(pathToSrcBundle_out, 'appConfig'))
//fs.copySync(path.join(root, 'Docker'), path.join(pathToSrcBundle_out, 'Docker'))
console.log('Dependencies Copied')

console.log('Copying CodeDeploy to : ' + pathToDist_out);
fs.copySync(path.join(root, 'codeDeploy'), path.join(pathToDist_out, 'codeDeploy'))
fs.copySync(path.join(root, 'codeDeploy', 'appspec.yml'), path.join(pathToDist_out, 'appspec.yml'))
console.log('CodeDeploy Copied')

console.log('Copying node_modules to : ' + pathToSrcBundle_out);
fs.copySync(path.join(root, 'node_modules'), path.join(pathToSrcBundle_out, 'node_modules'))
console.log('node_modules folder copied');


