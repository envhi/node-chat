const loginService = require('./loginService')
require('express-async-errors'); // precisei dessa lib pq o middleware de erro não funciona com funções async;

class LoginController {
    async login(req, res) {

        const { email, password } = req.body
        const login = await loginService.login(email, password)

        return res.json({ token: `${login.jwt}` })
    }


    async testToken(req, res) {
        res.json(`passou para o endpoint, req.decodedUserId = ${req.decodedUserId}`)
    }
}



module.exports = new LoginController()