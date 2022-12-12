import { WebSocketServer } from 'ws'

const initWSServer = (server: any): any => {

  const WebSocketServer = require('ws').Server
  const wss = new WebSocketServer({ port: 2222 })

  wss.on('error', (ws, error) => {
      console.log('error', error)
    })

  wss.on('connection', (ws) => {
    console.info('websocket connection open')

    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({
        msg1: 'yo, im msg 1'
      }))

      setTimeout(() => {
        ws.send(JSON.stringify({
          msg2: 'yo, im a delayed msg 2'
        }))
      }, 1000)
    }
  })



  // console.log('initWSServer')
  // const wss = new WebSocketServer({ server })

  // wss.on('connection', function connection(ws) {
  //   ws.on('message', function message(data) {
  //     console.log('received: %s', data)
  //   })

  //   ws.send('something')
  // })

  // wss.on('error', (ws, error) => {
  //   console.log('error', error)
  // })

}

export { initWSServer }



