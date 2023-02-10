// const connectToMongo= require('./db');
const express = require('express')
var cors= require('cors')

const mongoose = require('mongoose')

const url = `mongodb+srv://iNote:Book123@cluster0.thuuv13.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
   
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

// connectToMongo();
const app = express()
const port = 5000 || process.env.PORT

app.use(cors())
app.use(express.json())

// Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`myNotebook backend listening on port ${port}`)
})