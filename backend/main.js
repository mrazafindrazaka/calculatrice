const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const {calculate} = require('./calculate')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/', calculate)

app.listen(port, () => {
    console.log('Listening on port ' + port)
})
