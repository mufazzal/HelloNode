import fs from 'fs'

let appConfig: any = null

export const loadAppConfig: any = () => {
    if(appConfig)
        return appConfig
    else 
        appConfig = {}

    const runtimeResPath = './appConfig/runConfig.json'
    appConfig.runConfigs = JSON.parse(fs.readFileSync(`${runtimeResPath}`, 'utf8'))

    const runtimeRawResPath = './appConfig/runConfigRaw'
    appConfig.runConfigRaw = fs.readFileSync(`${runtimeRawResPath}`, 'utf8')

    const buildDetailPath = './appConfig/buildDetail.json'
    appConfig.buildDetails = JSON.parse(fs.readFileSync(`${buildDetailPath}`, 'utf8'))

    const nodeDetailPath = './appConfig/nodeDetails.json'
    appConfig.nodeDetailPath = JSON.parse(fs.readFileSync(`${nodeDetailPath}`, 'utf8'))

    return appConfig
}  
 