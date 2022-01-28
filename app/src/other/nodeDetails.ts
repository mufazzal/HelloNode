import fs from 'fs'

const printNodeDetails = function() {
  try {
  const content = fs.readFileSync('./appConfig/nodeDetails.txt', 'utf8')
  return content
  } catch(e) {
    return e
  }
}
  

export {printNodeDetails}