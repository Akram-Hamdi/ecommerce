const router = require('express').Router()
const addProducts = require('./admin/addProducts')
const getProducts = require('./Products/getProducts')
const deleteProduct = require('./admin/deleteProduct');
const modifyProduct = require('./admin/modifyProduct');

// Authentication
const { register, login, renewToken,logout } = require('./imports')
router.post('/register', register)
router.post('/login', login)
router.post('/renewtoken', renewToken)
router.get('/logoutSession', logout)

// Post requests
router.post('/addProducts', addProducts)

router.get('/getProducts',getProducts)

router.delete('/deleteProduct/:productId', deleteProduct);

router.put('/modifyProduct/:productId', modifyProduct);

module.exports = router