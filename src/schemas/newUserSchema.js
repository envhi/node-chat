const yup = require('yup')

let newUserSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
});


module.exports = newUserSchema;