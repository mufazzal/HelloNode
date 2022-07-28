import axios from 'axios'
import logger from '../../logger'

//https://www.hn.com/checkAccess/http/another-app-cluster-ip.another-app.svc
//https://www.hn.com/checkAccess/http/hn-ms1-cluster-ip.hn-ms1.svc

const checkAccess = async function(protocol, url) {
  try {
logger.info(protocol, url)    
      const res = await axios.get(`${protocol}://${url}`)      
      .then(rawRes => {
logger.info('res', rawRes)
        const result = rawRes.data
        return result
      })
      .catch(e => {
logger.info('err', e)
        return e
      })
logger.info(res)      
      return res
  } catch(e) {
    return e
  }
}
  

export {checkAccess}