const mongoose= require('mongoose')


const dbConnection=(url)=>{
    mongoose.connect(url,(err)=>{
        if(!err){
            console.log('DB Connected Sucessfully!')
        }
    })
}

module.exports={dbConnection}