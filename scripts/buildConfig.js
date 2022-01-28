const path = require("path")

const root = process.cwd();

function getOutputPath() {
    return path.join(root, "outputs");
}

function getOutputDistPath() {
    return path.join(root, "outputs", "dist");
}

function getOutputSourcePath() {
    return path.join(root, "outputs", "dist", "source");
}


const getRuntimeResourcesPath = () => {
    return path.join(root, "appConfig")
}


module.exports = {
    getOutputSourcePath, 
    getOutputPath,
    getRuntimeResourcesPath,
    getOutputDistPath
}