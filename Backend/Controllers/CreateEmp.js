const Emp=require("../Model/Employee")

exports.CreateEmp=async(req,res)=>{
    try{
        const {
            firstName,lastName,email,address,phone,salary,position
        }  =req.body
       

        if(!firstName || !lastName || !email || !address || !phone || !salary || !position ){
            console.log("value is missing")
            return (
                res.status(400).json({
                    message:"required parameter is missing",
                    success:false
                })
            )
        }

        //  add all data in db
      const newemp= await Emp.create({firstName,lastName,email,address,phone,salary,position})
            console.log("newemp",newemp)
            res.status(201).json({
                success:true,
                message:"employee created successfully",
                data:newemp
            })


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occureed while creating employee"+error
        })
    }
}

// get all employee
exports.getAllEmp=async(req,res)=>{
    try{
        const allemp=await Emp.find();
        res.status(200).json({
            success:true,
            message:"all employee data",
            data:allemp
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occurred while fetching all employees",
            error:error.message
        })
    }
}

// get single employee
exports.getAllEmpById=async(req,res)=>{
    try{ 
        const empid=req.params.id
        const emp=await Emp.find({_id:empid})

        if(emp.length!==1){
            return res.status(404).json({
                success:false,
                message:"employee not found"
            })
        }
        res.status(200).json({
            success:true,
            message:"employee data",
            data:emp[0]
        })  
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occurred while fetching employee data",
            error:error.message
        })
    }
}

//  update employee data
exports.updateEmp=async(req,res)=>{
    try{
        const {
            firstName,lastName,email,address,phone,salary,position
        }=req.body
        const empid=req.params.id
        const emp=await Emp.findByIdAndUpdate(empid,{firstName,lastName,email,address,phone,salary,position},{new:true})

        res.status(200).json({
            success:true,
            message:"employee data updated successfully",   
            data:emp
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occurred while updating employee data",
            error:error.message
        })
    }
}
//  delete employee data
exports.deleteEmp=async(req,res)=>{
    try{
        const empid=req.params.id
        await Emp.findByIdAndDelete(empid)
        res.status(200).json({
            success:true,
            message:"employee deleted successfully"

        })  
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"error occurred while deleting employee data",
            error:error.message
        })
    }
}