import axios from 'axios'

const checkAccess = async function(protocol, url) {
  try {
console.log(protocol, url)    
      const res = await axios.get(`${protocol}://${url}`)      
      .then(rawRes => {
        console.log('res', rawRes)
        const result = rawRes.data
        return result
      })
      .catch(e => {
        console.log('err', e)
        return e
      })
console.log(res)      
      return res
  } catch(e) {
    return e
  }
}
  

export {checkAccess}