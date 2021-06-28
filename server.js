require('colors')
const express = require('express')
const app = express()
const cors = require('cors')
const config = require('./config')

//app uses...
app.use(express.json())
app.use(cors())

//routes...

module.exports = app.listen(config.port, () => {
	console.log(` Using Firebase... -Server on port ${config.port} `.black.bgYellow	)
})
