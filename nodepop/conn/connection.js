const mongoose =  require('mongoose')

mongoose.connect('mongodb://127.0.0.1/nodepop');

const connection = mongoose.connection;

module.exports = connection
