import fs from 'fs'
import dotnev from 'dotenv'
//import { getFalvourRuntimeResourcesPath } from "../../scripts/buildConfig"

let flvConfig: any = null

export const loadAppConfig: any = () => {
    if(flvConfig)
        return flvConfig

    const runtimeResPath = './appConfig/config.json'//getFalvourRuntimeResourcesPath(flv)

    flvConfig = JSON.parse(fs.readFileSync(`${runtimeResPath}`, 'utf8'))
    return flvConfig
}   