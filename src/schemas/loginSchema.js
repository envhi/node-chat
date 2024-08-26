const yup = require('yup')

let loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});


module.exports = loginSchema;