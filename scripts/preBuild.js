const rimraf = require("rimraf");
const {getOutputPath} = require("./buildConfig")

const outputPath = getOutputPath()
rimraf.sync(outputPath);
console.log(`${outputPath} folder is deleted!`);