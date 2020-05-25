const express = require('express')
const app = express()
const PORT = 80

app.use(express.static('public'))

app.listen(PORT)

console.log('Running on http://localhost:' + PORT)
