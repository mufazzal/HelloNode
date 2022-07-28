import express from 'express'
import {sum, muiltiply} from './calc/calculator'
import {getSSMParams} from './other/sSMParams'
import {printNodeDetails} from './other/nodeDetails'
import {checkAccess} from './other/checkAccess'
import {fakeLoad} from './other/fakeLoad'
import {loadAppConfig} from './appConfigLoader'
import {callHnMsFlow} from './other/hn_ms'
import logger from '../logger'

class App {
    public express: any;
    public appConfig: any;

    constructor() {
        this.express = express()
        this.appConfig = loadAppConfig(true)
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()

        router.get('/', (req: any,res: any) => {
            res.send('Hello from Application - version: ' + this.appConfig.buildDetails.Version)
            logger.info('handled request', { req, res })
        })

        router.get('/config', (req: any,res: any) => {
            this.appConfig = loadAppConfig(true)
            res.send(JSON.stringify(this.appConfig))
            logger.info('handled request', { req, res })
        })        

        router.get('/health', (req: any,res: any) => {
            res.send('OK')
            logger.info('handled request', { req, res })
        })

        router.get('/sum/:v1/:v2', function (req: any,res: any) {
            res.send('Result = ' + sum(parseInt(req.params.v1), parseInt(req.params.v2)))
            logger.info('handled request', { req, res })
        })

        router.get('/multiply/:v1/:v2', function (req: any,res: any) {
            res.send('Result = ' + muiltiply(parseInt(req.params.v1), parseInt(req.params.v2)))
            logger.info('handled request', { req, res })
        })

        router.get('/readSSMParams', function (req: any,res: any) {
            res.send(getSSMParams())
            logger.info('handled request', { req, res })
        })

        // router.get('/nodeDetails', function (req: any,res: any) {
        //     res.send(printNodeDetails())
        // })

        router.get('/checkAccess/:protocol/:url', async function (req: any,res: any) {
            const fres = await checkAccess(req.params.protocol, req.params.url)
            res.send(fres)
            logger.info('handled request', { req, res })
        })   

        router.get('/loadTest/:level', function (req: any,res: any) {
            const out = fakeLoad(req.params.level)
            console.log(out)
            res.send(out)
            logger.info('handled request', { req, res })
        })             

        router.get('/dummy', (req: any,res: any) => {
            res.send('dummy6')
            logger.info('handled request', { req, res })
        })

        router.get('/error', (req: any,res: any) => {
            res.send('error')
            logger.error('handled request', { req, res })
        })
        
        router.get('/flow/:flowId', (req: any,res: any) => {
            const out = callHnMsFlow(req.params.flowId)
            res.send(out)
            logger.error('handled request', { req, res })
        })        

        this.express.use('/', router)
    }
}

export default new App().express
