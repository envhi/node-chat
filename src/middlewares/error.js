const errorMiddleware = (error, req, res, next) => {
    console.log('error no middleware express +', error.message)
    console.log(error.statusCode)


    const statusCode = error.statusCode ?? 500
    const message = error.message ? error.message : 'Internal Server Error'
    res.status(statusCode).json(message)
}

module.exports = errorMiddleware