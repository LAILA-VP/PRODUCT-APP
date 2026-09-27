//import express
const express= require('express')
var cors= require('cors')
require("./connectin")
const proModel=require("./models/product")

//initialise
const app = express()

//middle
app.use(express.json())
app.use(cors())

//api creation
app.get('/', (req, res) => {
  res.send('Hello World')
})

//add
app.post("/add",(req,res)=>{
    proModel(req.body).save()
    res.send("data added")
})

//view
app.get("/view",async(req,res)=>{
    var data=await proModel.find()
    res.send(data)
})

//delete
app.delete("/remove/:id",async(req,res)=>{
    await proModel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})

//update
app.put("/edit/:id",async(req,res)=>{
    await proModel.findByIdAndUpdate(req.params.id,req.body)
   res.send("data Updated")
})

//port setting
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})