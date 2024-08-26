const express = require('express')
const router = require('./src/router')
const errorMiddleware = require('./src/middlewares/error')
const cors = require('cors')
const app = express()

app.use(express.json())


app.use(cors())

app.use(router)


//// usar o express error handling pra nao ficar respondendo http com erro de qualquer lugar, cair tudo aqui
app.use(errorMiddleware)

app.listen(3000, () => {
    console.log('server is running: PORT 3000')
})