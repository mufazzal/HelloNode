import express from 'express'
import {sum, muiltiply} from './calc/calculator'
import {getSSMParams} from './other/sSMParams'
import {printNodeDetails} from './other/nodeDetails'
import {checkAccess} from './other/checkAccess'
import {fakeLoad} from './other/fakeLoad'
import {loadAppConfig} from './appConfigLoader'
import {callHnMsFlow} from './other/hn_ms'
import logger from '../logger'
import { auth, requiredScopes  } from 'express-oauth2-jwt-bearer'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { expressjwt: expressJwt } = require('express-jwt')
import jwks from 'jwks-rsa'
import jwtScope from 'express-jwt-scope'
import cors from 'cors'
import unless from 'express-unless'


class App {
    public express: any;
    public appConfig: any;
    public checkJwt: any

    constructor() {
        this.express = express()
        this.appConfig = loadAppConfig(true)

        this.checkJwt = expressJwt({
            secret: jwks.expressJwtSecret({
                cache: true,
                rateLimit: true,
                jwksRequestsPerMinute: 5,
                jwksUri: 'https://dev-muf-school.auth0.com/.well-known/jwks.json'
          }),
          audience: 'https://mufreact',
          issuer: 'https://dev-muf-school.auth0.com/',
          algorithms: ['RS256']
      }).unless({path: ['/',  /\/public*/]})
      

      
    this.express.use(this.checkJwt)

    this.express.use('/', express.static('site'))
    this.express.use('/public', express.static('site'))
    // this.express.use('/locales', express.static('site/locales'))


      //---------------

      const corsOptions = {
        origin: ['http://localhost:3100', 'https://localhost:3100'],
        methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
        optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
      }      
      this.express.use(cors(corsOptions))


      this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()

        
        // router.get('/', (req: any,res: any) => {
        //     res.send('Hello from Application - version: ' + this.appConfig.buildDetails.Version)
        //     logger.info('handled request', { req, res })
        // })

        router.get('/api/homeWidget', jwtScope('read:homeWidget'), function (req, res) {
            const max = 100, min = 1
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json({
                totalOrder: 15, 
                pendingOrder: 13, 
                canceledOrder: Math.floor(Math.random() * (max - min + 1) + min)
            })
        })

        router.get('/api/supportWidget', jwtScope('read:supportWidget'), function (req, res) {
            const max = 100, min = 1
            res.json({
                totalNumberOfTicket: Math.floor(Math.random() * (max - min + 1) + min),
                totalOpenTicket: 3,
                totalInWaitTicket: 5,
                totalCloseTicket: 2,
                time: new Date().toLocaleString()
            })
        })        
        

        // // requiredScopes('read:homeWidget'),
        // router.get('/api/homeWidget', this.checkJwt, function(req, res) {
        //     res.json({
        //         message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:homeWidget to see this.'
        //     });
        // });


        // --------------------------------

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
        
        router.get('/flow/:flowId', async (req: any,res: any) => {
            logger.info('-------------', { req, res })
            const out = await callHnMsFlow(req.params.flowId)
            res.send(JSON.stringify(out))
            logger.info('handled request', { req, res })
        })        

        this.express.use('/', router)
    }
}

export default new App().express
