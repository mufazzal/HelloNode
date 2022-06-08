import express from 'express'
import {sum, muiltiply} from './calc/calculator'
import {getSSMParams} from './other/sSMParams'
import {printNodeDetails} from './other/nodeDetails'
import {checkAccess} from './other/checkAccess'
import {loadAppConfig} from './appConfigLoader'

class App {
    public express: any;
    public appConfig: any;

    constructor() {
        this.express = express()
        this.appConfig = loadAppConfig()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()

        router.get('/', (req: any,res: any) => {
            res.send('Hello from Application - version: ' + this.appConfig.buildDetails.Version)
        })

        router.get('/config', (req: any,res: any) => {
            res.send(JSON.stringify(this.appConfig))
        })        

        router.get('/health', (req: any,res: any) => {
            res.send('OK')
        })

        router.get('/sum/:v1/:v2', function (req: any,res: any) {
            res.send('Result = ' + sum(parseInt(req.params.v1), parseInt(req.params.v2)))
        })

        router.get('/multiply/:v1/:v2', function (req: any,res: any) {
            res.send('Result = ' + muiltiply(parseInt(req.params.v1), parseInt(req.params.v2)))
        })

        router.get('/readSSMParams', function (req: any,res: any) {
            res.send(getSSMParams())
        })

        // router.get('/nodeDetails', function (req: any,res: any) {
        //     res.send(printNodeDetails())
        // })

        router.get('/checkAccess/:protocol/:url', async function (req: any,res: any) {
            const fres = await checkAccess(req.params.protocol, req.params.url)
            res.send(fres)
        })        

        router.get('/dummy', (req: any,res: any) => {
            res.send('dummy6')
        })

        this.express.use('/', router)
    }
}

export default new App().express
