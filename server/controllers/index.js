const router = require('express').Router()
const addProducts = require('./admin/addProducts')
const getProducts = require('./Products/getProducts.js')

// Authentication
const { register, login, renewToken,logout } = require('./imports')
router.post('/register', register)
router.post('/login', login)
router.post('/renewtoken', renewToken)
router.get('/logoutSession', logout)

// Post requests
router.post('/addProducts', addProducts)

router.get('/getProducts',getProducts)

module.exports = router