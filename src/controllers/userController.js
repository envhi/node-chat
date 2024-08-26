const { ApiError, BadRequestError, NotFoundError, UnauthorizedError } = require('../helpers/ApiError');
const userRepository = require('../repositories/userRepository');
const userService = require('../services/userService');
require('express-async-errors'); // precisei dessa lib pq o middleware de erro não funciona com funções async;
class UserController {



    async findAllUsers(req, res) {
        const usersData = [
            {
                "email": "ana@example.com",
                "idade": 28,
                "senha": "senha123"
            },
            {
                "email": "bruno@example.com",
                "idade": 34,
                "senha": "bruno2024"
            },
            {
                "email": "carlos@example.com",
                "idade": 45,
                "senha": "carlos@2024"
            },
            {
                "email": "daniela@example.com",
                "idade": 32,
                "senha": "daniela2024"
            },
            {
                "email": "eduardo@example.com",
                "idade": 29,
                "senha": "edu1234"
            },
            {
                "email": "fernanda@example.com",
                "idade": 40,
                "senha": "fernanda123"
            },
            {
                "email": "gabriel@example.com",
                "idade": 37,
                "senha": "gabriel@2024"
            },
            {
                "email": "juliana@example.com",
                "idade": 31,
                "senha": "juliana2024"
            },
            {
                "email": "luiz@example.com",
                "idade": 39,
                "senha": "luiz1234"
            },
            {
                "email": "mariana@example.com",
                "idade": 27,
                "senha": "mariana2024"
            }
        ];

        const data = await userService.findAllUsers()

        return res.json(data)
    }


    async getUserNameByToken(req, res) {
        const user = await userRepository.findUserByUserId(req.decodedUserId)

        console.log('ae')
        res.send(user.name)
    }


    async createUser(req, res) {
        console.log('req body password >>>>>>', req.body.password)

        const { name, email, password } = req.body

        const newUser = await userService.createUser(name, email, password)

        return res.status(201).json({ msg: 'New user registered!', newUserData: newUser })
    }



}

module.exports = new UserController();

