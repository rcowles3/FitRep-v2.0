let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CreateUserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, 
    heightFt: {
        type: String,
        required: true
    },
    heightIn: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

let CreateUser = mongoose.model("Users", CreateUserSchema);

module.exports = CreateUser;