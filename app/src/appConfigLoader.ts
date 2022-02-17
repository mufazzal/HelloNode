import fs from 'fs'

let appConfig: any = null

export const loadAppConfig: any = () => {
    if(appConfig)
        return appConfig

    const runtimeResPath = './appConfig/appConfig.json'

    appConfig = JSON.parse(fs.readFileSync(`${runtimeResPath}`, 'utf8'))
    return appConfig
}   