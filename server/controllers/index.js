const router = require('express').Router()

// Authentication
const { register, login } = require('./imports')
router.post('/register', register)
router.post('/login', login)
module.exports = router