const { UnauthorizedError } = require("../helpers/ApiError")
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {

    const { authorization } = req.headers

    if (!authorization) {
        throw new UnauthorizedError('Token not provided')
    }

    const token = authorization.split(" ")[1];

    const decodedToken = await jwt.verify(token, 'secret');

    console.log(decodedToken)

    req.decodedUserId = decodedToken.id

    next()



}

module.exports = auth