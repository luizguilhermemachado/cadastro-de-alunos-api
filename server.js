import App from './app.js'

const port = 3001
App.listen(port, ()=>{
  console.log('Servidor iniciado')
  console.log(`http://localhost:${port}`)
})
