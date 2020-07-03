const express = require('express')
const next = require('next')

const dev = true // process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, '0.0.0.0', err => {
      if (err) throw err
      console.log('> Ready on http://localhost:8080')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
