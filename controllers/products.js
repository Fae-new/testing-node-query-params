const Product =require('../models/product')



const getProducts=async(req,res)=>{
const queryObject={}
const {name,company,sort}= req.query
if(name){
    queryObject.name={$regex:name,$options:'i'}
}

if(company){
queryObject.company=company
}

let result=Product.find(queryObject)

if(sort){
const sortString=sort.split(',').join(' ')

    result=result.sort(sortString)

}
const page= +req.query.page || 1
const limit= +req.query.limit || 10
const skip = (page-1) * limit

result= result.skip(skip).limit(limit)


    const data= await result
 
res.status(200).json({nbHits:data.length,data})

}











module.exports={getProducts}