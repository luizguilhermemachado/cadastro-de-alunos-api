import App from './app.js'

const port = process.env.PORT || 3001

App.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
