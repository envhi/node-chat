const { BadRequestError } = require('../helpers/ApiError');
const userRepository = require('../repositories/userRepository');

class UserService {

    async findAllUsers() {
        try {
            return await userRepository.findAllUsers()

        } catch (error) {
            console.log(error.message)
            throw new Error('')
        }
    }


    async createUser(name, email, password) {
        console.log('teste hash', password)

        const userExists = await userRepository.findUserByEmail(email)

        if (userExists) {
            throw new BadRequestError('E-mail already registered')
        }

        // password = await hashPassword(password) ------ passei pro middleware


        return await userRepository.createUser(name, email, password)
    }
}

module.exports = new UserService()