const express =require('express')
const connectDB = require('./db/connect')
require('dotenv').config()
require('express-async-errors')
const errorHandlerMiddleware = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')
const ProductsRouter = require('./routes/products')

const app=express()

app.use(express.json())
app.use('/api',ProductsRouter)



app.use(notFound)
app.use(errorHandlerMiddleware)

const start=async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000,console.log('server started on port 3000'))
        
    } catch (error) {
        console.log(error);
        
    }
}

start()