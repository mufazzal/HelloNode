import fetch from 'node-fetch'
import logger from '../../logger'

const hn_ms_1 = process.env.hn_ms_1
const hn_ms_2 = process.env.hn_ms_2
const hn_ms_3 = process.env.hn_ms_3

function callHnMsFlow(flowId: any) {
    if(flowId == 1)
        return callHnMsFlow1()
    else 
        return {success: false, msg: 'provide flow id'}
}

async function callHnMsFlow1() {

    const out: any = {'flow': 'hn-ms-1 | hn-ms-2 | hn-ms-3'}
logger.info(out)    
    out.hn_ms1 = await fetch(hn_ms_1)
    .then(res=> {
        logger.info(res.toString())
        return res.json()
    }).then(res => {
        logger.info(res.toString())
        return {success: true, res}
    }).catch(e => {
        logger.info(e.toString())
        return {success: false, e}
    })
logger.info(out)    
    
    // out.hn_ms2 = await fetch(hn_ms_2)
    // .then(res=> res.json())
    // .then(res => {
    //     return {success: true, res}
    // }).catch(e => {
    //     return {success: false, e}
    // })  
    
    // out.hn_ms3 = await fetch(hn_ms_3)
    // .then(res=> res.json())
    // .then(res => {
    //     return {success: true, res}
    // }).catch(e => {
    //     return {success: false, e}
    // })      
    
    return out
}


export {callHnMsFlow}
