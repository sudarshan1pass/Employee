const mongoose=require("mongoose")
const employeeSchema= new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:20
    },
    lastName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:20
    },
    phone:{
        type:Number,
        required:true,
        
    },
    email:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
    }
})
module.exports=mongoose.model("Emp",employeeSchema)