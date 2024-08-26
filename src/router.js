const express = require('express')
const router = express.Router()


const userController = require('./controllers/userController')
const validateBody = require('./middlewares/newUserValidation')
const loginController = require('./auth/loginController')
const validateLoginBody = require('./middlewares/loginValidation')
const auth = require('./middlewares/auth')


///////////// user
router.get('/users', userController.findAllUsers)
router.post('/users', validateBody, userController.createUser)



router.get('/test', auth, userController.getUserNameByToken)

///////////// auth
router.post('/auth/login', validateLoginBody, loginController.login)

router.get('/auth/testtoken', auth, loginController.testToken)

module.exports = router