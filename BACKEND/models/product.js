const mongoose =require('mongoose')

var schema=mongoose.Schema({
    Name:String,
    Disc:String,
    Price:Number,
    Image:String
})

var productModel=mongoose.model("PRODUCT",schema)
module.exports=productModel