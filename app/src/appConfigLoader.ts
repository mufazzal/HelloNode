import fs from 'fs'

let appConfig: any = null

export const loadAppConfig: any = (isHardLoad: boolean) => {
    if(!isHardLoad && appConfig)
        return appConfig
    else 
        appConfig = {}

    const buildDetailPath = './appConfig/buildDetail.json'
    const nodeDetailPath = './appConfig/nodeDetails.json'
    const runtimeResPath = './runtimeConfigs/runConfig.json'

    try {    
        appConfig.buildDetails = JSON.parse(fs.readFileSync(`${buildDetailPath}`, 'utf8'))
    } catch(e) {
        appConfig.buildDetails = `cannot load ${buildDetailPath}` 
    }

    try {  
        appConfig.nodeDetails = JSON.parse(fs.readFileSync(`${nodeDetailPath}`, 'utf8'))
    } catch(e) {
        appConfig.nodeDetails = `cannot load ${nodeDetailPath}` 
    }    
    try {  
        appConfig.runConfig = JSON.parse(fs.readFileSync(`${runtimeResPath}`, 'utf8'))
    } catch(e) {
        appConfig.runConfig = `cannot load ${runtimeResPath}` 
    }
    appConfig.envs = {
            appEnv1: process.env.appEnv1, 
            appEnv2: process.env.appEnv2, 
            appEnv3: process.env.appEnv3,
            logDir: process.env.logDir}
    return appConfig
}  
 