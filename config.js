'use strict'

module.exports = {
    port: process.env.PORT,
    nodemailerSmtpOptions: process.env.SMTP_OPTIONS,
    nodemailerTargetEmail: process.env.TARGET_EMAIL
}