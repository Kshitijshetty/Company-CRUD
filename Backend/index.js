const express=require('express')
require('./db/mongoose')
const cors = require('cors')
const userRouter = require('./routes/routes')
const comRouter =require('./routes/CompanyRoutes')
const app = express()
const port = process.env.PORT 
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(comRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
