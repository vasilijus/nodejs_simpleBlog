const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const postRouter = require('./routes/post') //location
const keys = require('./keys')

const port = process.env.PORT || 5000
const clientPath = path.join(__dirname, 'client')

mongoose.connect(keys.mongoURI)
    .then( () => console.log('MongoDb connected.') )
    .catch( err => console.error(err) )

const app = express()
app.use('/api/post', postRouter) //URL prefix , router which we want to use
app.use(express.static(clientPath))
app.listen(port, () => {
    console.log(`Server has been started on port ${port}`)
})
