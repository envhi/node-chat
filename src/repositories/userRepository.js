const pool = require('../db/db')

class UserRepository {

    async findAllUsers() {
        const result = await pool.query('SELECT * FROM users')

        const data = result.rows

        return data
    }

    async findUserByEmail(email) {

        const result = await pool.query(
            `SELECT * FROM users
            WHERE email='${email}'
            `
        )

        return result.rows[0]

    }

    async findUserByUserId(userId) {

        const result = await pool.query(
            `SELECT * FROM users
            WHERE id='${userId}'
            `
        )

        return result.rows[0]

    }

    async createUser(name, email, password) {

        console.log('passowrd recebido no repository', password)
        const newUser = await pool.query(
            `INSERT INTO users (name, email, password)
             VALUES ($1, $2, $3)
             RETURNING*`,
            [name, email, password]
        )

        console.log('asd')
        return newUser.rows[0]
    }
}

module.exports = new UserRepository();