const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    username:{
        type: String,
        required: true,
        trim: true,
        maxlength: 25
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type:  String,
        default: 'https://vinivia-bucket.s3-ap-southeast-1.amazonaws.com/16315221823601DBA1A04Bn.jpg'
    },
    role:{
        type: String,
        default: 'user'
    },
    gender: {
        type: String,
        defaut: 'male'
    },
    mobile: {
        type: String,
        default: ''
    },
    address:{
        type: String,
        default: ''
    },
    story:{
        type: String,
        default: '',
        maxLength: 200
    },
    website:{
        type: String,
        default: ''
    },
    followers: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }],
    following: [{
        type: mongoose.Types.ObjectId,
        ref: 'user'
    }]
},{
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)