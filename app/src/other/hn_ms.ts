const hn_ms_1 = process.env.hn_ms_1
const hn_ms_2 = process.env.hn_ms_2
const hn_ms_3 = process.env.hn_ms_3

function callHnMsFlow(flowId: any) {
    if(flowId == 1)
        return callHnMsFlow1()
    else 
        return {success: false, msg: "provide flow id"}
}

function callHnMsFlow1() {

    const out: any = {"flow": "hn-ms-1 | hn-ms-2 | hn-ms-3"};
    fetch(hn_ms_1)
    .then(res => {
        out.hn_ms1 = {success: true, res}
    }).catch(e => {
        out.hn_ms1 = {success: false, e}
    })
    
    fetch(hn_ms_2)
    .then(res => {
        out.hn_ms2 = {success: true, res}
    }).catch(e => {
        out.hn_ms2 = {success: false, e}
    })  
    
    fetch(hn_ms_3)
    .then(res => {
        out.hn_ms3 = {success: true, res}
    }).catch(e => {
        out.hn_ms3 = {success: false, e}
    })      
    
    return out;
}


export {callHnMsFlow}