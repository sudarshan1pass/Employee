const monogoose =require("mongoose");

const coonectDB =async()=>{
    try{
      await monogoose.connect(process.env.DB_URL);
      console.log("MongoDB conncted suceffully ");
      
    }catch(error){
        console.log("Database connection error ",error);
        
    }
}
module.exports=coonectDB 