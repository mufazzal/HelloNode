const fs = require('fs-extra')
const path = require("path")
const { getOutputSourcePath, getOutputDistPath } = require("./buildConfig")

const root = process.cwd();

const pathToSrcBundle_out = getOutputSourcePath()
const pathToDist_out = getOutputDistPath()

fs.copySync(path.join(root, 'package-lock.json'), path.join(pathToSrcBundle_out, 'package-lock.json'))
fs.copySync(path.join(root, 'package.json'), path.join(pathToSrcBundle_out, 'package.json'))
fs.copySync(path.join(root, 'scripts'), path.join(pathToSrcBundle_out, 'scripts'))

fs.copySync(path.join(root, 'codeDeploy'), path.join(pathToDist_out, 'codeDeploy'))
fs.copySync(path.join(root, 'codeDeploy', 'appspec.yml'), path.join(pathToDist_out, 'appspec.yml'))

fs.copySync(path.join(root, 'node_modules'), path.join(pathToSrcBundle_out, 'node_modules'))
console.log('node_modules folder copied to ' + pathToSrcBundle_out);


