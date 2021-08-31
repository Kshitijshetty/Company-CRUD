const mongoose=require('mongoose')

const comSchema=new mongoose.Schema({
        name:{
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }, {
        timestamps: true
})

const Com = mongoose.model('Com', comSchema)

module.exports = Com