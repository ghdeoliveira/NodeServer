const router = require('express').Router()

router.use('/clientes', require('./clientes.js'))

module.exports = router