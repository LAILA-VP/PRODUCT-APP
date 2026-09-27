const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://lailavp258_db_user:LAILA@cluster0.fdfeikg.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("db connection")

})
.catch((err)=>{
    console.log(err)
})