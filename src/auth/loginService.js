const { BadRequestError } = require('../helpers/ApiError');
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class LoginService {

    async login(email, password) {

        console.log('login service >>>>>>>>>>>>>>>', email, password)

        const user = await userRepository.findUserByEmail(email)

        if (!user) {
            throw new BadRequestError('E-mail not registered')
        }


        if (!await bcrypt.compare(password, user.password)) {
            throw new UnauthorizedError('senha errada')
        }

        /////// colocar o secret no .env depois
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '10m' })

        return { jwt: token }
    }

    async testToken(req, res) {
        res.json('chegou no endpoint, token validado.')
    }
}

module.exports = new LoginService()