const router = require('express').Router()

// Authentication
const { register, login, renewToken,logout } = require('./imports')
router.post('/register', register)
router.post('/login', login)
router.post('/renewtoken', renewToken)
router.get('/logoutSession', logout)

module.exports = router

