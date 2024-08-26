const { BadRequestError } = require('../helpers/ApiError');
const loginSchema = require('../schemas/loginSchema');

const validateLoginBody = async (req, res, next) => {

    try {
        await loginSchema.validate(req.body)
    } catch (error) {
        console.log(error.message)
        throw new BadRequestError(error.message)
    }

    console.log('next()')
    next()

}


module.exports = validateLoginBody;