const express = require('express')
const app = express()
const PORT = 8080

app.use('/dist', express.static(__dirname + '/dist'))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(PORT)

console.log('Running on http://localhost:' + PORT)
