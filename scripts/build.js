const {getOutputSourcePath} = require("./buildConfig")
const {spawnAsPromise} = require("./spawnHelper")

const outputPath = getOutputSourcePath()

spawnAsPromise('node', ['node_modules/typescript/bin/tsc', '--outDir', outputPath])
