const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const studentSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: [true, 'first name is required'],
        maxlength: 32,
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'last name is required'],
        maxlength: 32,
    },
    bachelor: {
        type: String,
        trim: true,
        required: [true, 'bachelor is required'],
        unique: true,
        
    },


}, { timestamps: true })


// return a JWT token
studentSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
        expiresIn: 3600
    });
}



module.exports = mongoose.model("Student", studentSchema);