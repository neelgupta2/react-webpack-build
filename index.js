const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
const expressReactViews = require('express-react-views')

// serve static assets normally
app.set('view engine', 'jsx')
app.engine('jsx', expressReactViews.createEngine())
app.use(express.static(__dirname + '/public'))

// Handles all routes so you do not get a not found error
app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(port)
console.log("server started on port " + port)