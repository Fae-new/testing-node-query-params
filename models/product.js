const mongoose=require('mongoose')


const productSchema= new mongoose.Schema({
name:{
type:String,
required:[true,'Name property is required']
},
price:{
    type:Number,
    required:[true,'Price property is required']

},
featured:{
type:Boolean,
default:false


},
company:{
    type:String,
     enum: {
        values: ['ikea', 'liddy', 'caressa', 'marcos'],
        message: '{VALUE} is not supported company',
      }
}

,
rating:{
    type:Number,
    required:[true,'Rating property is required'],
    default:4.5

}



})


module.exports=mongoose.model('Products',productSchema)