const mongoose = require('mongoose')
const validator = require('validator')

const adressSchema = new mongoose.Schema({
    cep: String,
    adress: String,
    neighborhood: String,
    city: String,
    state: String
});

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true},
    adress: adressSchema,
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: props => `$(props.value) não é um e-mail válido!`
        }
    }
});

module.exports = mongoose.model('Author', authorSchema)