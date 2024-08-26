class ApiError extends Error {

    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

class BadRequestError extends ApiError {
    constructor(message, statusCode){
        super(message, 400)
    }
}

class NotFoundError extends ApiError {
    constructor(message){
        super(message, 404)
    }
}

class UnauthorizedError extends ApiError {
    constructor(message){
        super(message, 401)
    }
}

module.exports.ApiError = ApiError;
module.exports.BadRequestError = BadRequestError;
module.exports.NotFoundError = NotFoundError;
module.exports.UnauthorizedError = UnauthorizedError;