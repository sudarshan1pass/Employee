const express=require("express")
route=express.Router()
const {CreateEmp,getAllEmp,getAllEmpById,updateEmp,deleteEmp}=require("../Controllers/CreateEmp")

route.post("/createEmp",CreateEmp)
route.get("/getallemp",getAllEmp)
route.get("/getallempbyid/:id",getAllEmpById)
route.put("/updateemp/:id",updateEmp)
route.delete("/deleteemp/:id",deleteEmp)
module.exports=route 