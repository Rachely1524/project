const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: String,
    },
    city: {
        type: String,
    },
    email: {
        type: String,
    },
    Phone: {
        type: String,

    },
})
module.exports = mongoose.model('user', userSchema)