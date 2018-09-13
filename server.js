const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

let value = 5

app.get('/', (req, res) => res.send('Hello World!'))

// app.get('/value', (req, res) => res.send({
//   value
// }))

app.get('/value/increment', (req, res) => {
  value = value + 1
  res.send({
    value
  })
})

app.get('/value/get', (req, res) => {
  res.send({
    value
  })
})

app.listen(8000, () => console.log('Listening on port 8000!'))
