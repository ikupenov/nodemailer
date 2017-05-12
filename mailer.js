'use strict'

const nodemailer = require('nodemailer')
const config = require('./config')

const transport = nodemailer.createTransport(config.nodemailerSmtpOptions)

function send(req, res) {
    const mail = req.body

    const options = {
        from: mail.senderEmail,
        to: config.nodemailerTargetEmail,
        subject: mail.subject,
        text: mail.content,
        html: mail.htmlContent
    }

    transport.sendMail(options, (error, info) => {
        if (error)
            req.status(500).json({ error, message: info })
        else 
            res.status(200).json(info.response)
    })
}

module.exports = { send }