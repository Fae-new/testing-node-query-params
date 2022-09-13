const connectDB = require('./db/connect')
const Product=require('./models/product')
const productData= require('./products.json')
require('dotenv').config()



const add =async()=>{

try {
    await connectDB(process.env.MONGO_URI)
    await Product.deleteMany()
    await Product.create(productData)


process.exit(0)

} catch (error) {
    
    console.log(error);
    process.exit(1)
}
   



}

add()
