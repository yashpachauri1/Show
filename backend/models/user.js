

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// static signup method

userSchema.statics.signup = async function (email, password) {
    //validation
    if (!email || !password) {
        throw Error("all fields are required");
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {

        throw Error('password is weak')
    }

    //
    const exists = await this.findOne({ email });

    if (exists) {
        throw Error('Email is already in use')
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash });
    return user

};

userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error('all fields are required');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw Error('invalid email')
    }

    const metch = await bcrypt.compare(password, user.password);

    if (!metch) {
        throw Error('Invalid password')
    }

    return user;

}



module.exports = mongoose.model("User", userSchema);