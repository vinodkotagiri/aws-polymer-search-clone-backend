const express = require('express')
require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')
const reposRoute = require('./routes/repo')
const app = express()
const PORT = process.env.PORT || 12000

app.use(morgan('combined'))
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, () => console.log('Database Connected'))

app.use('/', reposRoute)
app.listen(PORT, () => console.log('Server listening on port: ' + PORT))
