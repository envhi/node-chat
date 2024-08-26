const newUserSchema = require('../schemas/newUserSchema');
const { BadRequestError } = require('../helpers/ApiError');
const hashPassword = require('../helpers/hashPassword');

const validateBody = async (req, res, next) => {

    try {
        await newUserSchema.validate(req.body)
        req.body.password = await hashPassword(req.body.password)
    } catch (error) {
        console.log(error.message)
        throw new BadRequestError(error.message)
    }

    console.log('next()')
    next()

}


module.exports = validateBody;