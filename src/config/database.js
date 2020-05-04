const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose.Error.messages.general.required = "O atributa '{PATH}' é obrigatório."

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://ciclosapp:@Js030508@ds041651.mlab.com:41651/heroku_8qn4wl8r'
// const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/mymoney'

module.exports = mongoose.connect(url, { useNewUrlParser: true })