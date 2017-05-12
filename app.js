'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const mailer = require('./mailer')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/send', mailer.send)

app.listen(config.port)