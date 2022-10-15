const mongoose = require('mongoose')

const db = 'mongodb+srv://myappebac:ZyEvJqZ7MNFRh9V7r6Pl@cluster0.pcdd51i.mongodb.net/properties?retryWrites=true&w=majority';

const connection = mongoose.connect(db, {
    useNewUrlParser: true
})

module.exports = connection