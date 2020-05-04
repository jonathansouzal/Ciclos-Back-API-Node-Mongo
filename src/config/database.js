const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "O atributa '{PATH}' é obrigatório."

module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })