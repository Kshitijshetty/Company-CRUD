const mongoose = require('mongoose')
const dotenv=require('dotenv')

dotenv.config()
mongoose.connect(process.env.DB_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},()=>{console.log('connected');})
