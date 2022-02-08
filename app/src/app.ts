import express from 'express'
import {sum, muiltiply} from './calc/calculator'
import {getSSMParams} from './other/sSMParams'
import {printNodeDetails} from './other/nodeDetails'

class App {
    public express: any;

    constructor() {
        this.express = express()
        this.mountRoutes()
    }

    private mountRoutes(): void {
        const router = express.Router()

        router.get('/', (req: any,res: any) => {
            res.send(`Hello from Application1`)
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

        router.get('/nodeDetails', function (req: any,res: any) {
            res.send(printNodeDetails())
        })

        this.express.use('/', router)
    }
}

export default new App().express
