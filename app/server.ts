import app from './src/app'
const port = 3010

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  app.emit('appStarted')
})
